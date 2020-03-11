import React, { useEffect, useState } from 'react'
import { useImmer } from 'use-immer'

import { Form } from '@unform/web'
import { toast } from 'react-toastify'

import { monthHours } from '../../../services/API/calls'
import LoadingPage from '../../../components/LoadingPage'

import Button from '../../../components/Button'
import Title from '../../../components/Title'

import {
  Container,
  CodeForm,
  Select,
  YearTable,
  BottomScreen,
  Input,
} from './styles'

const months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dez',
]

const initialHours = ['', '', '', '', '', '', '', '', '', '', '', '']

const currentYear = new Date().getFullYear()
const defaultSelect = { label: currentYear, value: currentYear }

export default function MonthlyHour() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [monthHour, setMonthHour] = useImmer(initialHours)
  const [loading, setLoading] = useState(false)

  async function getHours() {
    setLoading(true)
    const resp = await monthHours.getHours(selectedYear)

    setMonthHour(draft => {
      draft[0] = ''
      draft[1] = ''
      draft[2] = ''
      draft[3] = ''
      draft[4] = ''
      draft[5] = ''
      draft[6] = ''
      draft[7] = ''
      draft[8] = ''
      draft[9] = ''
      draft[10] = ''
      draft[11] = ''
      resp.data.map(month => {
        draft[month.dtMesReferencia - 1] = month.qtHorasUteis
        return month
      })
    })

    setLoading(false)
  }

  useEffect(() => {
    getHours()
  }, [selectedYear])// eslint-disable-line

  function handleYearChange(selected) {
    setSelectedYear(selected.value)
  }

  function getSelectOpts() {
    const options = []
    for (let i = new Date().getFullYear() + 1; i >= 2000; i -= 1) {
      options.push({ label: i, value: i })
    }

    return options
  }

  async function handleInputChange(e, index) {
    e.persist()

    setMonthHour(draft => {
      draft[index] = e.target.value
    })
  }

  async function updateHours(data) {
    setLoading(true)

    const payload = Object.values(data)
      .map((hours, index) => {
        if (hours !== '') {
          return {
            dtAnoReferencia: selectedYear,
            dtMesReferencia: index + 1,
            qtHorasUteis: parseInt(hours, 10),
          }
        }
      })
      .filter(hours => {
        return hours
      })

    try {
      await monthHours.addHours(payload)

      toast.success('Horas atualizadas com sucesso')
    } catch (error) {
      toast.error('Erro ao atualizar horas')
    }

    getHours()

    setLoading(false)
  }

  return (
    <Container>
      {loading && <LoadingPage />}

      <Title>Parametrização: Quantidade Horas Mês</Title>

      <Form onSubmit={updateHours}>
        <CodeForm>
          <p>Ano:</p>
          <Select
            name="year"
            options={getSelectOpts()}
            defaultValue={defaultSelect}
            onChange={handleYearChange}
          />
        </CodeForm>

        <YearTable>
          <thead>
            <tr>
              <th>Janeiro</th>
              <th>Fevereiro</th>
              <th>Março</th>
              <th>Abril</th>
              <th>Maio</th>
              <th>Junho</th>
              <th>Julho</th>
              <th>Agosto</th>
              <th>Setembro</th>
              <th>Outubro</th>
              <th>Novembro</th>
              <th>Dezembro</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              {months.map((month, index) => (
                <td key={month}>
                  <Input
                    id={index}
                    name={month}
                    type="text"
                    autoComplete="off"
                    maxLength={3}
                    onChange={e => handleInputChange(e, index)}
                    value={monthHour[index]}
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </YearTable>

        <BottomScreen>
          <span />
          <Button type="submit" darken big>
            Atualizar
          </Button>
        </BottomScreen>
      </Form>
    </Container>
  )
}
