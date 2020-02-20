import React, { useState, useEffect, useRef } from 'react'
import { useImmer } from 'use-immer'

import { Form } from '@rocketseat/unform'

import { toast } from 'react-toastify'
import { FaRegTrashAlt } from 'react-icons/fa'

import ConfirmModal from '../../../components/ConfirmModal'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import Title from '../../../components/Title'

import { technology } from '../../../services/API/calls'

import { Container, TopForm, TechsTable, CheckBox } from './styles'

export default function Tecnology() {
  const [technolyList, setTechnologyList] = useImmer([])
  const [showConfirm, setShowConfirm] = useState(false)
  const [selectedTech, setSelectedTech] = useState({})

  async function getTechs() {
    const response = await technology.getTechnologies()

    setTechnologyList(() => {
      return response.data
    })
  }

  useEffect(() => {
    getTechs()
  }, [])// eslint-disable-line

  async function handleSubmit(data, { resetForm }) {
    try {
      await technology.addTechnology({ dsTecnologia: data.tech })

      toast.success('Tecnologia incluida com sucesso')

      getTechs()

      resetForm()
    } catch (error) {
      toast.error('Falha ao incluir tecnologia')
    }
  }

  async function toggleStatus(tech, index) {
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
    }
  }

  async function handleDelete(confirm) {
    setShowConfirm(false)

    if (confirm) {
      try {
        await technology.deleteTechnology(selectedTech)

        getTechs()
        toast.success('Tecnologia excluida com sucesso')
      } catch (error) {
        if (error.response.status === 400) {
          toast.warn(error.response.data, { autoClose: 15000 })
          return
        }
        toast.error('Erro ao excluir tecnologia')
      }
    }
  }

  function handleDeletePress(tech) {
    setSelectedTech(tech)
    setShowConfirm(true)
  }

  return (
    <>
      <Container>
        <Title>Parametrização: Tecnologias</Title>

        <Form onSubmit={handleSubmit}>
          <TopForm>
            <div>
              <p>Tecnologia:</p>
              <Input name="tech" />
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
                  <CheckBox>
                    <input
                      type="checkbox"
                      checked={tech.ativo}
                      onChange={() => toggleStatus(tech, index)}
                    />
                    <span className="checkbox" />
                  </CheckBox>
                </td>
                <td>{tech.dsTecnologia}</td>
                <td>
                  <div>
                    <FaRegTrashAlt
                      size={14}
                      onClick={() => {
                        handleDeletePress(tech)
                      }}
                    />
                  </div>
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
