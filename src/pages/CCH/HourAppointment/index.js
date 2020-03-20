import React, { useState, useEffect, useMemo } from 'react'
import { useImmer } from 'use-immer'

import { Form } from '@unform/web'
import { FaFileAlt, FaRegSave } from 'react-icons/fa'

import { MdCheckBox } from 'react-icons/md'
import { monthlyHour } from '../../../services/API/calls'

import Refund from './Modals/Refund'
import Projects from './Modals/Projects'

import {
  Container,
  TopInformation,
  CCHInfo,
  CchTable,
  StaticInfo,
  SaveButton,
  JustifyButton,
  TotalHours,
  BottonButtons,
} from './styles'

import Title from '../../../components/Title'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import Calendar from '../../../components/DatePicker'
import LoadingScreen from '../../../components/LoadingPage'

export default function HourAppointment() {
  const [loading, setLoading] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [cchTable, setCchTable] = useImmer([])
  const [selectedDay, setSelectedDay] = useState()
  const [monthHours, setMonthHours] = useState('00')
  // const [showActivities, setShowActivities] = useState(false)
  const [showProjects, setShowProjects] = useState(false)
  const [showRefund, setShowRefund] = useState(false)
  // const [dayjustify, setDayjustify] = useState('')

  async function getMonthHours() {
    const month = selectedDate.getMonth() + 1
    const year = selectedDate.getFullYear()

    const resp = await monthlyHour.getHours(month, year)
    setMonthHours(resp.data.qtHorasUteis)
  }

  async function handleDateChange() {
    setLoading(true)

    await getMonthHours()
    setCchTable(() => setInitialTableState(selectedDate))

    setLoading(false)
  }

  function getDaysOnMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  function contructDay(numDay, isHoliday = false, month) {
    return {
      numDay,
      isHoliday,
      month,
      hours: ['', '', '', '', '', ''],
      savedHours: { totalHours: '00:00', status: 'disabled' },
    }
  }

  function padToTwo(num) {
    return num < 10 ? `0${num}` : num
  }

  function isHolliday(date) {
    return date.getDay() === 0 || date.getDay() === 6
  }

  function getMonthDesc(monthNum) {
    const monthDesc = [
      'JAN',
      'FEV',
      'MAR',
      'ABR',
      'MAI',
      'JUN',
      'JUL',
      'AGO',
      'SET',
      'OUT',
      'NOV',
      'DEZ',
    ]

    return monthDesc[monthNum]
  }

  function formatHour(txt) {
    if (txt.indexOf(':') !== -1) {
      return txt.length > 3 ? txt : txt.substring(0, txt.length - 1)
    }

    return txt.length < 3
      ? txt
      : `${txt.substring(0, 2)}:${txt.substring(2, 3)}`
  }

  function isNumeric(hourTxt) {
    const re = /^[0-9\b]+$/
    const cleanTxt = hourTxt.split(':').join('')
    return re.test(cleanTxt)
  }

  function setInitialTableState(date) {
    const initTable = []
    const currentDate = date
    const numDays = getDaysOnMonth(currentDate)

    for (let i = 1; i <= numDays; i += 1) {
      initTable.push(
        contructDay(
          padToTwo(i),
          isHolliday(
            new Date(
              `${currentDate.getFullYear()}-${padToTwo(
                currentDate.getMonth() + 1
              )}-${padToTwo(i)}T12:00:00Z`
            )
          ),
          getMonthDesc(currentDate.getMonth())
        )
      )
    }

    return initTable
  }

  function handleInputChange(e) {
    e.persist()

    const formattedHour = formatHour(e.target.value)
    const inputValid = isNumeric(formattedHour)

    const [row, col] = e.target.id.split(',')

    if (e.target.value === '' || inputValid) {
      const teste = document.getElementById(e.target.id)

      teste.value = formattedHour
    }

    if (formattedHour.length === 5) {
      const element = document.getElementById(`${row},${parseInt(col, 10) + 1}`)

      if (element) {
        element.focus()
      }
    }
  }

  function contructTableCell(day, index) {
    return (
      <tr key={day.numDay}>
        <td>
          <StaticInfo
            isHoliday={day.isHoliday}
            onClick={() => setSelectedDay(index)}
          >
            {day.month}
          </StaticInfo>
        </td>
        <td>
          <StaticInfo
            isHoliday={day.isHoliday}
            onClick={() => setSelectedDay(index)}
          >
            {day.numDay}
          </StaticInfo>
        </td>

        {day.hours.map((hour, index) => {
          return (
            <td key={String(index)}>
              <Input
                className="hourInput"
                type="text"
                name={`${day.numDay - 1},${index}`}
                id={`${day.numDay - 1},${index}`}
                maxLength={5}
                autoComplete="off"
                onFocus={e => e.target.select()}
                disabled={parseInt(day.numDay, 10) !== selectedDay + 1}
                onChange={e => handleInputChange(e)}
              />
            </td>
          )
        })}

        <td>
          <span>{day.savedHours.totalHours}</span>
        </td>
        <td>
          <div>
            <SaveButton onClick={() => setShowProjects(true)}>
              <FaRegSave />
            </SaveButton>
            <JustifyButton
              status={day.savedHours.status}
              disabled={day.savedHours.status === 'disabled'}
              onClick={() => setShowProjects(true)}
            >
              {/* <FaFileAlt onClick={() => handleJustifyDay(day.numDay)} /> */}
              <FaFileAlt />
            </JustifyButton>
          </div>
        </td>
      </tr>
    )
  }

  useEffect(() => {
    setLoading(true)

    setCchTable(() => setInitialTableState(new Date()))
    getMonthHours()

    setLoading(false)
  }, []) // eslint-disable-line

  useEffect(() => {
    const element = document.getElementById(`${selectedDay},0`)

    if (element) {
      element.focus()
    }
  }, [selectedDay])

  useEffect(() => {
    handleDateChange()
  }, [selectedDate])// eslint-disable-line

  return (
    <Container>
      {loading && <LoadingScreen />}
      <Title>Cadastro de Horas</Title>

      <TopInformation>
        <div>
          <span>Vigência: </span>
          <Calendar
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            dateFormat="MMMM/yyyy"
            showMonthYearPicker
          />
        </div>

        <div>
          <span>Horas do Mês:</span>
          <span>{monthHours || '00'}:00</span>
        </div>

        <div>
          <span>Horas Não Justificadas:</span>
          <span>16:00</span>
        </div>

        <div>
          <span>Total:</span>
          <span>16:00</span>
        </div>
      </TopInformation>

      <Form
        onSubmit={() => {}}
        initialData={{
          '0,0': '08:00',
          '0,1': '12:00',
          '0,2': '13:00',
          '0,5': '17:00',
        }}
      >
        <CCHInfo>
          <CchTable>
            <thead>
              <tr>
                <th>Mês</th>
                <th>Dia</th>
                <th>Hora Entrada</th>
                <th>Saída Almoço</th>
                <th>Retorno Almoço</th>
                <th>Outra Saída</th>
                <th>Retorno</th>
                <th>Hora Saída</th>
                <th>Horas Trabalhadas</th>
                <th />
              </tr>
            </thead>

            <tbody>
              {cchTable.map((row, index) => {
                return contructTableCell(row, index)
              })}
            </tbody>
          </CchTable>

          <TotalHours>
            <h1>Horas Projetos:</h1>
            <table>
              <tbody>
                <tr>
                  <td>BMB - Liberaçaõ de Seguradoras</td>
                  <td> - </td>
                  <td>08:00</td>
                </tr>
                <tr>
                  <td>CSAL - Reversão de Portabilidade</td>
                  <td> - </td>
                  <td>16:00</td>
                </tr>
              </tbody>
            </table>
          </TotalHours>
        </CCHInfo>

        <BottonButtons>
          <Button
            type="button"
            onClick={() => {
              setShowRefund(true)
            }}
          >
            Reembolso
          </Button>
          <Button type="button" onClick={() => {}}>
            Fechar Mês
          </Button>
        </BottonButtons>
      </Form>

      <Refund show={showRefund} close={() => setShowRefund(false)} />
      <Projects
        show={showProjects}
        close={() => setShowProjects(false)}
        dayjustify={new Date()}
      />
    </Container>
  )
}
