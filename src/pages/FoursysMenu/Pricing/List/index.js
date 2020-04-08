import React, { useState, useEffect, useMemo } from 'react'

import PropTypes from 'prop-types'
import { Form } from '@unform/web'
import { Link } from 'react-router-dom'
import { format, isBefore, addDays, parseISO } from 'date-fns'

import { MdModeEdit } from 'react-icons/md'
import history from '../../../../services/history'

import { pricing } from '../../../../services/API/calls'

import EditModal from '../Modals/EditProject'

import Title from '../../../../components/Title'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
import LoadingScreen from '../../../../components/LoadingPage'
import Pagination from '../../../../components/Pagination'

import { Container, Select, ProjectsTable, Prompt } from './styles'

export default function List({ location }) {
  const pageState = location.state ? location.state.pageInfo : null

  const [editing, setEditing] = useState(false)
  const [projEdit, setProjEdit] = useState()
  const [pricingList, setPricingList] = useState([])
  const [pricingStatus, setPricingStatus] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(pageState ? pageState.page : 1)
  const [numbPages, setNumbPages] = useState()
  const [searchTerms, setSearchTerms] = useState(
    pageState ? pageState.searchParams : {}
  )

  const resultsPerPage = 10

  const initialForm = useMemo(() => {
    if (!location.state || !location.state.pageInfo) return {}

    const status = pricingStatus.find(
      pric =>
        pric.value === location.state.pageInfo.searchParams.cdStatusPrecificacao
    )

    const code = location.state.pageInfo.searchParams.cdProjeto

    return { code, status }
  }, [location, pricingStatus])// eslint-disable-line

  function clearHistory() {
    if (location.state && location.state.pageInfo) {
      const state = { ...history.location.state }
      delete state.pageInfo
      history.replace({ ...history.location, state })
    }
  }

  function checkSearchParams(data) {
    const { code, status } = data

    if (code) {
      if (status) {
        return {
          cdProjeto: data.code,
          cdStatusPrecificacao: status,
        }
      }
      return { cdProjeto: data.code }
    }
    if (status) {
      return { cdStatusPrecificacao: status }
    }
    return null
  }

  function checkDatePeriod(date) {
    if (isBefore(parseISO(date), addDays(new Date(), 1))) return 'red'
    if (parseISO(date).toDateString() === addDays(new Date(), 2).toDateString())
      return 'yellow'
    return 'green'
  }

  async function getPricingList(payload) {
    const resp = await pricing.getPrincingList({
      ...payload,
      pageNumber: currentPage,
      pageSize: resultsPerPage,
    })

    const paginationInfo = JSON.parse(resp.headers['x-pagination'])

    setNumbPages(paginationInfo.TotalPages)

    setPricingList(
      resp.data.map(pric => {
        return {
          ...pric,
          formattedDate: pric.dtPrevistaEnvioPT
            ? format(parseISO(pric.dtPrevistaEnvioPT), 'dd/MM/yyyy')
            : '-',
          hourTag:
            pric.dtPrevistaEnvioPT &&
            pric.cdStatusPrecificacao !== (4 || 7 || 8)
              ? checkDatePeriod(pric.dtPrevistaEnvioPT)
              : '-',
        }
      })
    )
  }

  async function getPrincingStatus() {
    const resp = await pricing.getPrincingStatus()

    setPricingStatus(
      resp.data.map(status => {
        return {
          label: status.dsStatusPrecificacao,
          value: status.cdStatusPrecificacao,
        }
      })
    )
  }

  async function handleInitialData() {
    setLoading(true)

    await getPrincingStatus()
    await getPricingList(searchTerms)
    clearHistory()

    setLoading(false)
  }

  async function handleSubmit(data) {
    setLoading(true)

    setCurrentPage(1)
    const payload = checkSearchParams(data)

    setSearchTerms(payload)
    await getPricingList(payload)

    setLoading(false)
  }

  function handleEditProj(proj) {
    setProjEdit(proj)
    setEditing(true)
  }

  async function handleCloseModal() {
    setEditing(false)

    setLoading(true)

    await getPricingList(searchTerms)

    setLoading(false)
  }

  async function handleChangePage() {
    setLoading(true)

    await getPricingList(searchTerms)

    setLoading(false)
  }

  useEffect(() => {
    handleInitialData()
  }, [])// eslint-disable-line

  useEffect(() => {
    handleChangePage()
  }, [currentPage]) // eslint-disable-line

  return (
    <Container>
      {loading && <LoadingScreen />}
      <Title>Precificação</Title>

      <Form onSubmit={handleSubmit} initialData={initialForm}>
        <div>
          <p>Código Projeto:</p>
          <Input name="code" />
        </div>
        <div className="select">
          <p>Status:</p>
          <Select
            name="status"
            options={pricingStatus}
            defaultValue={initialForm.status}
            isClearable
          />
        </div>
        <Button type="submit" darken>
          Consultar
        </Button>
      </Form>

      <ProjectsTable>
        <thead>
          <tr>
            <th>Id</th>
            <th>Projeto</th>
            <th>Cliente</th>
            <th>Gerente</th>
            <th>Proposta</th>
            <th>Status</th>
            <th>Prazo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pricingList.length === 0 && (
            <tr>
              <td colSpan="8">Nenhum perfil encontrado</td>
            </tr>
          )}
          {pricingList.map(pric => (
            <tr key={pric.cdProjeto}>
              <td>{pric.cdProjeto}</td>
              <td>
                {pric.cdStatusPrecificacao ? (
                  <Link
                    to={{
                      pathname: '/menufoursys/pricing/edit',
                      state: {
                        pric,
                        pageInfo: {
                          page: currentPage,
                          searchParams: searchTerms,
                        },
                      },
                    }}
                  >
                    {pric.nmProjeto}
                  </Link>
                ) : (
                  pric.nmProjeto
                )}
              </td>
              <td>{pric.nmCliente}</td>
              <td>{pric.nmGerenteProjeto}</td>
              <td>{pric.dsProposta || '-'}</td>
              <td>{pric.dsStatusPrecificacao || '-'}</td>
              <td>
                <Prompt tag={pric.hourTag}>{pric.formattedDate || '-'}</Prompt>
              </td>
              <td>
                <MdModeEdit onClick={() => handleEditProj(pric)} />
              </td>
            </tr>
          ))}
        </tbody>
      </ProjectsTable>

      <Pagination
        currentPage={currentPage}
        totalPages={numbPages}
        handleChangePage={page => setCurrentPage(page)}
      />

      <EditModal proj={projEdit} show={editing} close={handleCloseModal} />
    </Container>
  )
}

List.propTypes = {
  location: PropTypes.object.isRequired,
}
