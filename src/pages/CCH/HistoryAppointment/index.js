import React, { useState, useEffect, useRef } from 'react'

import * as Yup from 'yup'
import ids from 'short-id'
import { toast } from 'react-toastify'
import { format, parseISO } from 'date-fns'
import { MdModeEdit } from 'react-icons/md'
import { FaRegTrashAlt } from 'react-icons/fa'

import { Form } from '@unform/web'

import DatePicker from '../../../components/DatePicker'
import LoadingPage from '../../../components/LoadingPage'

import {
  activities,
  monthlyHour,
  historyAppointment,
} from '../../../services/API/calls'

import Input from '../../../components/Input'
import Title from '../../../components/Title'
import Button from '../../../components/Button'

import {
  Container,
  HourInfo,
  EmployeeInfo,
  Select,
  ActivitiesTable,
  BottomInfo,
} from './styles'

export default function HistoryAppointment() {
  const [period, setPeriod] = useState(new Date())
  const [monthHours, setMonthHours] = useState(0)
  const [resourcesList, setResourceList] = useState([])
  const [activitiesList, setActivitiesList] = useState([])
  const [resource, setResource] = useState()
  const [projectList, setProjectList] = useState([])
  const [hourList, setHourList] = useState([])
  const [lastUpdate, setLastUpdate] = useState('')
  const [selectedProj, setSelectedProj] = useState()
  const [selectedAct, setSelectedAct] = useState()
  const [hoursInp, setHoursInp] = useState('')
  const [loading, setLoading] = useState(false)
  const [totalHour, setTotalHour] = useState('00:00')
  const [dateValid, setDateValid] = useState(false)

  const resourcesOption = resourcesList.map(asset => {
    return { label: asset.nmProfissional, value: asset.cdProfissional }
  })

  const projectOpts = projectList.map(proj => {
    return { label: proj.nmProjeto, value: proj.cdProjeto }
  })

  const schema = Yup.object().shape({
    name: Yup.string().required(),
    selectedProj: Yup.object().required(),
  })

  const formRef = useRef(null)

  function isNumeric(hourTxt) {
    const re = /^[0-9\b]+$/
    const cleanTxt = hourTxt.split(':').join('')
    return re.test(cleanTxt)
  }

  function formatHour(txt) {
    if (txt.indexOf(':') !== -1) {
      const [hour, minut] = txt.split(':')

      if (minut.length === 1) {
        return txt.length > 3
          ? `${hour.substring(0, hour.length - 1)}:${hour.substring(
              hour.length - 1
            )}${minut}`
          : `${hour + minut}`
      }

      return `${hour}${minut.substring(0, 1)}:${minut.substring(1, 3)}`
    }

    return txt.length < 3
      ? txt
      : `${txt.substring(0, 1)}:${txt.substring(1, 3)}`
  }

  function padToTwo(num) {
    return num < 10 ? `0${num}` : num
  }

  function checkHours(hour) {
    const [, min] = hour.split(':')
    return !Number.isNaN(min) && min < 60
  }

  async function getMonthHours() {
    const month = period.getMonth() + 1
    const year = period.getFullYear()

    const resp = await monthlyHour.getHours(month, year)
    setMonthHours(resp.data.qtHorasUteis)
  }

  async function getNames() {
    const resp = await historyAppointment.getResources()
    setResourceList(resp.data)
  }

  async function getActivities() {
    const resp = await activities.getActivities()
    setActivitiesList(
      resp.data.map(act => {
        return { label: act.nmAtividade, value: act.cdAtividade }
      })
    )
  }

  async function getLastAppoint() {
    const resp = await historyAppointment.getLastUpdate(resource)

    if (resp.data.data) {
      setLastUpdate(format(parseISO(resp.data.data), 'dd/MM/yyyy HH:mm'))
      return
    }

    setLastUpdate('')
  }

  async function getProjects() {
    const resp = await historyAppointment.getProjects(resource)

    setProjectList(resp.data)
  }

  async function getHours() {
    const payload = {
      month: period.getMonth() + 1,
      year: period.getFullYear(),
      user: resource,
    }

    const resp = await historyAppointment.getHistoryHours(payload)

    let totalHours = 0

    resp.data.map(reg => {
      const [hours, mins] = reg.qtHorasTrabalhadas.split(':')
      totalHours += parseInt(mins, 10) + parseInt(hours, 10) * 60
      return reg
    })

    const hour = totalHours / 60
    const rhour = Math.floor(hour)
    const minutes = Math.floor((hour - rhour) * 60)

    setTotalHour(`${padToTwo(rhour)}:${padToTwo(minutes)}`)

    setHourList(resp.data)
  }

  async function getIsDateValid() {
    const resp = await historyAppointment.getIsDateValid(period.toISOString())

    setDateValid(!resp.data.flPermissao)
  }

  async function handlePeriodChange() {
    setLoading(true)
    await getMonthHours()
    await getIsDateValid()

    if (resource) {
      await getHours()
      await getLastAppoint()
    }
    setLoading(false)
  }

  async function handleInitialData() {
    setLoading(true)
    await getMonthHours()
    await getNames()
    await getActivities()
    await getIsDateValid()
    setLoading(false)
  }

  async function handleResourceChange() {
    if (resource === undefined) {
      return
    }
    setLoading(true)
    await getProjects()
    await getHours()
    await getLastAppoint()

    setLoading(false)
  }

  async function handleSUbmit(data) {
    if (!checkHours(data.hours)) {
      toast.error('Erro ao incluir Horas')
      return
    }

    setLoading(true)

    try {
      await schema.validate({ ...data, selectedProj }, { abortEarly: false })

      const payload = {
        cdProfissional: data.name,
        cdProjeto: selectedProj.value,
        cdDivisao: projectList.find(
          proj => proj.cdProjeto === selectedProj.value
        ).cdDivisao,
        cdAtividade: selectedAct.value,
        Mes: period.getMonth() + 1,
        Ano: period.getFullYear(),
        QuantidadeHoras: data.hours,
      }

      await historyAppointment.AddHours(payload)
      toast.success('Horas Incluidas com sucesso')
      await getHours()
      await getLastAppoint()

      setSelectedProj({})
      setSelectedAct({
        label: 'Codificação',
        value: 4,
      })
      setHoursInp('')
    } catch (error) {
      const validationErrors = {}

      if (error instanceof Yup.ValidationError) {
        error.inner.forEach(err => {
          validationErrors[err.path] = err.message
        })

        formRef.current.setErrors(validationErrors)
      }

      if (error.response) {
        if (error.response.data.codErro === 1001) {
          toast.warn(error.response.data.descricaoErro, { autoClose: 150000 })
          return
        }
      }

      toast.error('Erro ao incluir Horas')
    } finally {
      setLoading(false)
    }
  }

  async function handleDelete(reg) {
    const payload = {
      cdProfissional: resource,
      cdProjeto: reg.cdProjeto,
      Mes: period.getMonth() + 1,
      Ano: period.getFullYear(),
      cdAtividade: reg.cdAtividade,
    }

    setLoading(true)

    try {
      await historyAppointment.DeleteHours(payload)

      toast.success('Horas excluidas com sucesso')
      await getHours()
      await getLastAppoint()
    } catch (error) {
      toast.error('Erro ao excluir as horas do recurso')
    } finally {
      setLoading(false)
    }
  }

  function handleEdit(reg) {
    setSelectedProj({ label: reg.nmProjeto, value: reg.cdProjeto })
    setSelectedAct({ label: reg.nmAtividade, value: reg.cdAtividade })
    setHoursInp(reg.qtHorasTrabalhadas)
  }

  function handleInputChange(e) {
    e.persist()

    const formattedHour = formatHour(e.target.value)
    const inputValid = isNumeric(formattedHour)

    if (e.target.value === '' || inputValid) {
      setHoursInp(formattedHour)
    }
  }

  useEffect(() => {
    handlePeriodChange()
  }, [period]) // eslint-disable-line

  useEffect(() => {
    handleInitialData()
    setSelectedAct({
      label: 'Codificação',
      value: 4,
    })
  }, [])// eslint-disable-line


  useEffect(() => {
    handleResourceChange()
  }, [resource]) // eslint-disable-line

  return (
    <Container>
      {loading && <LoadingPage />}
      <Title>Horas por Histórico</Title>
      <Form onSubmit={handleSUbmit} ref={formRef}>
        <HourInfo>
          <div>
            <p>Vigência:</p>
            <DatePicker
              selected={period}
              onChange={date => setPeriod(date)}
              dateFormat="MMMM/yyyy"
              showMonthYearPicker
              locale="pt"
            />
          </div>
          <div className="hourMonth">
            <p>Horas do Mês:</p>
            <p>{monthHours || '00'}:00</p>
          </div>
        </HourInfo>
        <EmployeeInfo>
          <div>
            <p>Nome:</p>
            <Select
              name="name"
              options={resourcesOption}
              onChange={selectedOption => setResource(selectedOption.value)}
            />
          </div>
          <div>
            <p>Projeto:</p>
            <Select
              name="project"
              options={projectOpts}
              onChange={setSelectedProj}
              value={selectedProj}
            />
          </div>
          <div>
            <p>Atividade:</p>
            <Select
              name="activitie"
              options={activitiesList}
              onChange={setSelectedAct}
              value={selectedAct}
            />
          </div>
          <div>
            <p>Horas:</p>
            <Input
              name="hours"
              type="text"
              onChange={e => handleInputChange(e)}
              value={hoursInp}
              autoComplete="off"
              maxLength={6}
              error={!checkHours(hoursInp)}
            />
          </div>
          <Button type="submit" disabled={dateValid}>
            Salvar
          </Button>
        </EmployeeInfo>
      </Form>

      <ActivitiesTable>
        <thead>
          <tr>
            <th>Gerente</th>
            <th>Projeto</th>
            <th>Atividade</th>
            <th>Horas</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {hourList.length === 0 && (
            <tr>
              <td colSpan="4" className="NoRegisters">
                Nenhum Registro encontrado
              </td>
            </tr>
          )}
          {hourList.map(appoint => (
            <tr key={ids.generate()}>
              <td>{appoint.nmProfissional}</td>
              <td>{appoint.nmProjeto}</td>
              <td>{appoint.nmAtividade}</td>
              <td>{appoint.qtHorasTrabalhadas}</td>
              <td>
                <div>
                  <button
                    type="button"
                    disabled={!appoint.flHorasHistorico}
                    onClick={() => handleEdit(appoint)}
                  >
                    <MdModeEdit />
                  </button>

                  <button
                    type="button"
                    disabled={!appoint.flHorasHistorico}
                    onClick={() => handleDelete(appoint)}
                  >
                    <FaRegTrashAlt className="garbage" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </ActivitiesTable>

      <BottomInfo>
        <div>
          <span>Total Horas Trabalhadas:</span>
          <span>{totalHour}</span>
        </div>
        <div>
          <span>Ultimo Lançamento:</span>
          <span>{lastUpdate}</span>
        </div>
      </BottomInfo>
    </Container>
  )
}
