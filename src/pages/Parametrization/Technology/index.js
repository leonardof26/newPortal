import React, { useState, useEffect, useRef } from 'react'
import { useImmer } from 'use-immer'

import { Form } from '@unform/web'
import * as Yup from 'yup'

import { toast } from 'react-toastify'
import { FaRegTrashAlt } from 'react-icons/fa'

import ConfirmModal from '../../../components/ConfirmModal'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import Title from '../../../components/Title'
import CheckBox from '../../../components/CheckBox'
import LoadingPage from '../../../components/LoadingPage'

import { technology } from '../../../services/API/calls'

import { Container, TopForm, TechsTable } from './styles'

export default function Tecnology() {
  const [technolyList, setTechnologyList] = useImmer([])
  const [showConfirm, setShowConfirm] = useState(false)
  const [selectedTech, setSelectedTech] = useState({})
  const [loading, setLoading] = useState(false)
  const [techTxt, setTechTxt] = useState('')

  const formRef = useRef(null)

  const schema = Yup.object().shape({
    tech: Yup.string().required('Favor informar tecnologia'),
  })

  async function getTechs() {
    setLoading(true)

    const response = await technology.getTechnologies()

    setTechnologyList(() => {
      return response.data
    })

    setLoading(false)
  }

  useEffect(() => {
    getTechs()
  }, [])// eslint-disable-line

  async function handleSubmit(data, { reset }) {
    setLoading(true)
    try {
      await schema.validate(data, { abortEarly: false })

      await technology.addTechnology({ dsTecnologia: data.tech })

      toast.success('Tecnologia incluida com sucesso')

      getTechs()

      reset()
    } catch (error) {
      const validationErrors = {}

      if (error instanceof Yup.ValidationError) {
        error.inner.forEach(err => {
          validationErrors[err.path] = err.message
        })

        formRef.current.setErrors(validationErrors)

        return
      }

      toast.error('Falha ao incluir tecnologia')
    } finally {
      setLoading(false)
    }
  }

  async function toggleStatus(tech, index) {
    setLoading(true)
    const { cdTecnologia, ativo } = tech
    try {
      await technology.updateTechnology({
        cdTecnologia,
        ativo: !ativo,
      })

      setTechnologyList(draft => {
        draft[index].ativo = !draft[index].ativo
      })
    } catch (error) {
      toast.error('Erro ao atualizar tecnologia')
    } finally {
      setLoading(false)
    }
  }

  async function handleDelete(confirm) {
    setShowConfirm(false)

    if (confirm) {
      setLoading(true)
      try {
        await technology.deleteTechnology(selectedTech)

        getTechs()
        toast.success('Tecnologia excluida com sucesso')
      } catch (error) {
        if (
          error.response.status === 400 &&
          error.response.data.codErro === 1000
        ) {
          toast.warn(
            'Não foi possivel excluir a tecnologia devido a mesma estar vinculada com algum projeto',
            {
              autoClose: 1500,
            }
          )
          return
        }
        toast.error('Erro ao excluir tecnologia')
      } finally {
        setLoading(false)
      }
    }
  }

  function handleDeletePress(tech) {
    setSelectedTech(tech)
    setShowConfirm(true)
  }

  return (
    <>
      {loading && <LoadingPage />}
      <Container>
        <Title>Parametrização: Tecnologias</Title>

        <Form onSubmit={handleSubmit} ref={formRef}>
          <TopForm>
            <div>
              <p>Tecnologia:</p>
              <Input
                name="tech"
                onChange={e => setTechTxt(e.target.value)}
                value={techTxt}
                err={techTxt.length === 0}
              />
            </div>

            <Button type="submit" darken>
              Cadastrar
            </Button>
          </TopForm>
        </Form>

        <TechsTable>
          <thead>
            <tr>
              <th>Ativo</th>
              <th>Tecnologia</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {technolyList.map((tech, index) => (
              <tr key={tech.cdTecnologia.toString()}>
                <td>
                  <CheckBox
                    checked={tech.ativo}
                    onChange={() => toggleStatus(tech, index)}
                  />
                </td>
                <td>{tech.dsTecnologia}</td>
                <td>
                  <FaRegTrashAlt
                    className="garbage"
                    onClick={() => {
                      handleDeletePress(tech)
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </TechsTable>
      </Container>
      <ConfirmModal show={showConfirm} handleClose={handleDelete} />
    </>
  )
}
