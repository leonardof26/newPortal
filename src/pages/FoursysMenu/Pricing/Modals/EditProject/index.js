import React, { useState, useEffect, useMemo, useRef } from 'react'

import Modal from 'react-bootstrap/Modal'

import { toast } from 'react-toastify'
import * as Yup from 'yup'
import PropTypes from 'prop-types'

import { Form } from '@unform/web'
import { parseISO } from 'date-fns'

import { Container, Header, Select, Body } from './styles'

import {
  pricing,
  technology,
  projects,
} from '../../../../../services/API/calls'

import Input from '../../../../../components/Input'
import MaskInput from '../../../../../components/Unform/MaskInput'
import Button from '../../../../../components/Button'
import DatePicker from '../../../../../components/Unform/DatePicker'
import LoadingScreen from '../../../../../components/LoadingPage'

export default function EditProject({ proj, show, close }) {
  const [projDetails, setProjDetails] = useState({})
  const [techList, setTechList] = useState([])
  const [metricList, setMetricList] = useState([])
  const [descountList, setDescountList] = useState([])
  const [loading, setLoading] = useState(false)
  const [initialDate, setInitialDate] = useState()
  const [endDate, setEndDate] = useState()
  const [prevDate, setPrevDate] = useState()
  const [metric, setMetric] = useState({})
  const [descount, setDescount] = useState({})
  const [selectedTechs, setSelectedTechs] = useState([])
  const [projsTech, setProjsTech] = useState([])
  const [hourInput, setHourInput] = useState('')

  const formRef = useRef(null)

  const defaultForm = useMemo(() => {
    if (!projDetails) return ''
    return {
      proposal: projDetails.dsProposta,
      proposalRS: projDetails.rsProposta,
      hiringRS: projDetails.rsContratacao,
      funcPoints: projDetails.qtPontoFuncao,
      prodInd: projDetails.qtIndiceProdutividade,
    }
  }, [projDetails]) // eslint-disable-line

  const descountOpts = useMemo(() => {
    return descountList.map(desc => ({
      label: `${desc.qtPercDesconto}%`,
      value: desc.cdDesconto,
    }))
  }, [descountList])

  const schema = Yup.object().shape({
    client: Yup.number().required(),
    inicialDate: Yup.string().required(),
    endDate: Yup.string().required(),
    sendDate: Yup.string().required(),
    metric: Yup.number().required(),

    discountLevel: Yup.number().when('client', {
      is: 1,
      then: Yup.number().required(),
    }),
    funcPoints: Yup.number().when('metric', {
      is: 1,
      then: Yup.number().required(),
    }),
    prodInd: Yup.number().when('metric', {
      is: 1,
      then: Yup.number().required(),
    }),
    hours: Yup.string().when('metric', {
      is: !1,
      then: Yup.string().required(),
    }),
    proposalRS: Yup.string().when('client', {
      is: 1,
      then: Yup.string().required(),
    }),
    hiringRS: Yup.string().when('client', {
      is: 1,
      then: Yup.string().required(),
    }),

    proposal: Yup.string().required(),
    techs: Yup.array(),
  })

  function constructPayload(data) {
    return {
      cdProjeto: projDetails.cdProjeto,
      cdProposta: projDetails.cdProposta,
      cdPrecificacao: projDetails.cdPrecificacao,
      dtInicioPrevista: initialDate.toISOString(),
      dtFimPrevista: endDate.toISOString(),
      dtPrevistaEnvioPT: prevDate.toISOString(),
      dsProposta: data.proposal,
      cdMetrica: metric.value,
      qtPontoFuncao: data.funcPoints,
      qtIndiceProdutividade: data.prodInd,
      HorasMetrica: data.hours,
      rsProposta: data.proposalRS,
      rsContratacao: data.hiringRS,
      cdDesconto: descount.value,
      cdFator: descount.value
        ? descountList.find(d => d.cdDesconto === descount.value).cdFator
        : null,
      tecnologias: selectedTechs.map(tech => ({ cdTecnologia: tech.value })),
    }
  }

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

  async function validateData(data) {
    await schema.validate(
      {
        client: proj.cdCliente,
        ...data,

        discountLevel: descount.value,
        metric: metric.value,
      },
      {
        abortEarly: false,
      }
    )
  }

  async function getProjDetails() {
    const resp = await pricing.getProjectDetails(proj.cdProjeto)

    setProjDetails(resp.data)
  }

  async function getTechs() {
    const resp = await technology.getTechnologies()

    setTechList(
      resp.data
        .filter(tech => tech.ativo)
        .map(tech => ({ label: tech.dsTecnologia, value: tech.cdTecnologia }))
    )
  }

  async function getMetrics() {
    const resp = await pricing.getMetrics()

    setMetricList(
      resp.data.map(met => ({ label: met.nmMetrica, value: met.cdMetrica }))
    )
  }

  async function getDescounts() {
    const resp = await pricing.getDescountLevels()

    setDescountList(resp.data)
  }

  async function getProjTechs() {
    const resp = await projects.getTechs(proj.cdProjeto)

    setProjsTech(resp.data)
  }

  async function handleInitData() {
    setLoading(true)

    await getTechs()
    await getProjTechs()
    await getMetrics()
    await getDescounts()
    await getProjDetails()

    setLoading(false)
  }

  async function handleSubmit(data) {
    setLoading(true)

    try {
      await validateData(data)

      const payload = constructPayload(data)

      await pricing.saveProjDetails(payload)

      toast.success('Informações alteradas com sucesso')
    } catch (error) {
      const validationErrors = {}

      if (error instanceof Yup.ValidationError) {
        error.inner.forEach(err => {
          validationErrors[err.path] = err.message
        })
        formRef.current.setErrors(validationErrors)
      }

      toast.error('Erro ao atualizar informações')
    }

    setLoading(false)
  }

  function handleInitialForm() {
    if (projDetails.horasMetrica) setHourInput(projDetails.horasMetrica)
    if (projDetails.dtInicioPrevista)
      setInitialDate(parseISO(projDetails.dtInicioPrevista))
    if (projDetails.dtFimPrevista)
      setEndDate(parseISO(projDetails.dtFimPrevista))
    if (projDetails.dtPrevistaEnvioPT)
      setPrevDate(parseISO(projDetails.dtPrevistaEnvioPT))
    if (projDetails.cdDesconto)
      setDescount(
        descountOpts.find(desc => desc.value === projDetails.cdDesconto)
      )
    if (projDetails.cdMetrica)
      setMetric(metricList.find(m => m.value === projDetails.cdMetrica))
    if (projDetails.tecnologias)
      setSelectedTechs(
        projDetails.tecnologias.map(tech => {
          return techList.find(tec => tec.value === tech.value)
        })
      )

    setSelectedTechs(
      projsTech.map(tech => {
        return techList.find(t => t.value === tech)
      })
    )
  }

  function cleanForm() {
    setInitialDate('')
    setEndDate('')
    setPrevDate('')
    setDescount({})
    setMetric({})
    setSelectedTechs([])
  }

  function handleInputChange(e) {
    e.persist()

    const formattedHour = formatHour(e.target.value)
    const inputValid = isNumeric(formattedHour)

    if (e.target.value === '' || inputValid) {
      setHourInput(formattedHour)
    }
  }

  useEffect(() => {
    if (!proj) return

    cleanForm()
    handleInitData()
  }, [proj]) // eslint-disable-line

  useEffect(() => {
    if (!projDetails) return

    handleInitialForm()
  }, [projDetails]) // eslint-disable-line

  if (!proj) return <div />

  return (
    <Container show={show} onHide={close} id="modal" size="xl" centered>
      {loading && <LoadingScreen />}
      <Header>
        <Modal.Header closeButton>
          <Modal.Title>
            <span>{proj.nmProjeto} </span>
          </Modal.Title>
        </Modal.Header>
        <p />
      </Header>

      <Form onSubmit={handleSubmit} initialData={defaultForm} ref={formRef}>
        <Modal.Body>
          <Body>
            <div>
              <div>
                <p>Proposta:</p>
                <Input name="proposal" />
              </div>

              <div>
                <p>Métrica:</p>
                <Select
                  name="metric"
                  options={metricList}
                  value={metric}
                  onChange={setMetric}
                />
              </div>
              <div className="optsInputs">
                {metric.value === 1 && (
                  <>
                    <div>
                      <p>Qt. Pontos Função:</p>
                      <MaskInput name="funcPoints" />
                    </div>
                    <div>
                      <p>Índice Produtiv:</p>
                      <MaskInput name="prodInd" />
                    </div>
                  </>
                )}
                {metric.value && metric.value !== 1 && (
                  <div>
                    <p>Horas:</p>
                    <Input
                      name="hours"
                      value={hourInput}
                      onChange={handleInputChange}
                      autoComplete="off"
                    />
                  </div>
                )}
              </div>
            </div>
            {proj.cdCliente === 1 && (
              <div>
                <div>
                  <p>Nível Desconto:</p>

                  <Select
                    name="discountLevel"
                    options={descountOpts}
                    value={descount}
                    onChange={setDescount}
                  />
                </div>
                <div>
                  <p>RS Proposta:</p>
                  <Input name="proposalRS" />
                </div>
                <div>
                  <p>RS Contratação:</p>
                  <Input name="hiringRS" />
                </div>
              </div>
            )}
            <div>
              <div>
                <p>Data Inicio Prevista:</p>
                <DatePicker
                  name="inicialDate"
                  onChange={date => setInitialDate(date)}
                  selected={initialDate}
                />
              </div>
              <div>
                <p>Data Fim Prevista:</p>
                <DatePicker
                  minDate={initialDate}
                  name="endDate"
                  onChange={setEndDate}
                  selected={endDate}
                />
              </div>
              <div>
                <p>Data Prevista para Envio da PT:</p>
                <DatePicker
                  name="sendDate"
                  onChange={setPrevDate}
                  selected={prevDate}
                />
              </div>
            </div>
            <div>
              <p>Tecnologias:</p>
              <Select
                name="techs"
                options={techList}
                isMulti
                value={selectedTechs}
                onChange={setSelectedTechs}
                multi
              />
            </div>
          </Body>
        </Modal.Body>

        <Modal.Footer>
          <Button type="button" onClick={close}>
            Voltar
          </Button>
          <Button type="submit" darken>
            Salvar
          </Button>
        </Modal.Footer>
      </Form>
    </Container>
  )
}

EditProject.propTypes = {
  proj: PropTypes.object,
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
}
