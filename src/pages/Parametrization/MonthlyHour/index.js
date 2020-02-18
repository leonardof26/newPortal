import React, { useEffect, useState } from 'react'
import { useImmer } from 'use-immer'

import { Form } from '@rocketseat/unform'

import { monthHours } from '../../../services/API/calls'

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

  async function getHours() {
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
      })
    })
  }

  useEffect(() => {
    getHours()
  }, [selectedYear])// eslint-disable-line

  function handleYearChange(selected) {
    setSelectedYear(selected.value)
  }

  function getSelectOpts() {
    const options = []
    for (let i = new Date().getFullYear() + 1; i >= 2000; i--) {
      options.push({ label: i, value: i })
    }

    return options
  }

  function handleInputChange(e, index) {
    e.persist()

    setMonthHour(draft => {
      draft[index] = e.target.value
    })

    // if (e.target.value.length === 3) {
    //   const element = document.getElementById(
    //     `${parseInt(e.target.id, 10) + 1}`
    //   )

    //   if (element) {
    //     element.focus()
    //   }
    // }
  }

  async function updateHours(data) {
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

    await monthHours.addHours(payload)

    getHours()
  }

  return (
    <Container>
      <Title>Parametrização: Quantidade Horas Mês</Title>

      <CodeForm>
        <p>Ano:</p>
        <Select
          name="year"
          options={getSelectOpts()}
          defaultValue={defaultSelect}
          onChange={handleYearChange}
        />
      </CodeForm>

      <Form onSubmit={updateHours}>
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
          <a />
          <Button type="submit" darken big>
            Atualizar
          </Button>
        </BottomScreen>
      </Form>
    </Container>
  )
}
