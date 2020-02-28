import React, { useEffect, useState, useRef } from 'react'

import { MdModeEdit } from 'react-icons/md'

import * as Yup from 'yup'
import { toast } from 'react-toastify'
import { Form } from '@unform/web'
import LoadingPage from '../../../components/LoadingPage'

import Input from '../../../components/Input'
import Button from '../../../components/Button'
import Title from '../../../components/Title'
import MaskInput from '../../../components/Unform/MaskInput'
import { formatPrice } from '../../../util/format'

import { saleProfiles } from '../../../services/API/calls'

import { Container, FormSelect, TopForm, ProfileTable, Select } from './styles'

const customStyles = {
  control: base => ({
    ...base,
    height: 32,
    minHeight: 32,
    position: 'initial',
  }),
}

export default function BradescoProfile() {
  const [perfilList, setPerfilList] = useState([])
  const [client, setClient] = useState('')
  const [clientList, setClientList] = useState([])
  const [perfilName, setPerfilName] = useState('')
  const [hourlyCost, setHourlyCost] = useState('')
  const [editing, setEditing] = useState(false)
  const [selectedProfile, setSelectedProfile] = useState()
  const [loading, setLoading] = useState(false)

  const formRef = useRef(null)

  const schema = Yup.object().shape({
    name: Yup.string().required('Favor informar cargo'),
    price: Yup.number()
      .typeError('Favor digitar preço valido')
      .required('O valor é obrigatório'),
  })

  useEffect(() => {
    async function getClients() {
      setLoading(true)
      const response = await saleProfiles.getClients()

      setClientList(
        response.data.map(cliente => {
          return { label: cliente.nmCliente, value: cliente.cdCliente }
        })
      )

      setLoading(false)
    }

    getClients()
  }, [])// eslint-disable-line

  useEffect(() => {
    getProfileList()
  }, [client])// eslint-disable-line

  async function getProfileList() {
    if (client === '') {
      return
    }
    setLoading(true)

    const response = await saleProfiles.getProfileList(client)

    setPerfilList(
      response.data.map(profile => ({
        ...profile,
        formattedPrice: formatPrice(profile.vlCusto),
      }))
    )

    setLoading(false)
  }

  function handleCancel() {
    setEditing(false)
    setPerfilName('')
    setHourlyCost('')
  }

  async function registerProfile(data) {
    if (editing) {
      const profile = {
        cdPerfil: selectedProfile.cdPerfil,
        nmPerfil: data.name,
        vlCusto: parseFloat(data.price),
        cdCliente: client,
      }
      try {
        await schema.validate(data, { abortEarly: false })

        await saleProfiles.updateProfile(profile)

        toast.success('Perfil alterado com sucesso!')
      } catch (error) {
        const validationErrors = {}

        if (error instanceof Yup.ValidationError) {
          error.inner.forEach(err => {
            validationErrors[err.path] = err.message
          })

          formRef.current.setErrors(validationErrors)
        }
        toast.error('Erro ao atualizar Perfil')
        return
      }
    } else {
      const profile = {
        nmPerfil: data.name,
        vlCusto: parseFloat(data.price),
        cdCliente: client,
      }

      try {
        await schema.validate(data, { abortEarly: false })

        await saleProfiles.addProfile(profile)

        toast.success('Perfil cadastrado com sucesso!')
      } catch (error) {
        const validationErrors = {}

        if (error instanceof Yup.ValidationError) {
          error.inner.forEach(err => {
            validationErrors[err.path] = err.message
          })

          formRef.current.setErrors(validationErrors)
        }

        toast.error('Erro ao cadastrar Perfil')
        return
      }
    }

    setEditing(false)
    setPerfilName('')
    setHourlyCost('')
    getProfileList()
  }

  function handleChangeOption(selectedOption) {
    setClient(selectedOption.value)

    setPerfilName('')
    setHourlyCost('')
  }

  function handleEdit(profile) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

    setPerfilName(profile.nmPerfil)
    setHourlyCost(profile.vlCusto)
    setEditing(true)
    setSelectedProfile(profile)
  }

  return (
    <Container>
      {loading && <LoadingPage />}
      <Title>Parametrização: Perfis de Venda</Title>

      <Form onSubmit={registerProfile} ref={formRef}>
        <FormSelect>
          <p>Cliente:</p>
          <Select
            name="client"
            options={clientList}
            onChange={handleChangeOption}
            isDisabled={editing}
            styles={customStyles}
            width="200px"
            height="10px"
            min-height="10px"
          />
        </FormSelect>
        <TopForm>
          <div>
            <p>Nome Perfil:</p>
            <Input
              name="name"
              value={perfilName}
              onChange={e => setPerfilName(e.target.value)}
              err={perfilName.length === 0}
            />
          </div>
          <div>
            <p>Custo Hora:</p>
            <MaskInput
              name="price"
              prefix="R$"
              decimalSeparator=","
              thousandSeparator="."
              default={hourlyCost || ''}
              value={hourlyCost}
              onChange={e => setHourlyCost(e.target.value)}
              err={hourlyCost.length === 0}
            />
          </div>
          <Button darken type="submit">
            {editing ? 'Atualizar' : 'Cadastrar'}
          </Button>
          {editing && (
            <Button type="button" darken onClick={handleCancel}>
              Cancelar
            </Button>
          )}
        </TopForm>
      </Form>

      <ProfileTable>
        <thead>
          <tr>
            <th>Código</th>
            <th>Perfil</th>
            <th>Custo Médio</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {perfilList.length === 0 && (
              <td colSpan="4">Nenhum perfil encontrado</td>
            )}
          </tr>
          {perfilList.map(profile => (
            <tr key={profile.cdPerfil}>
              <td>{profile.cdPerfil}</td>
              <td>{profile.nmPerfil}</td>
              <td>{profile.formattedPrice}</td>
              <td>
                <MdModeEdit onClick={() => handleEdit(profile)} />
              </td>
            </tr>
          ))}
        </tbody>
      </ProfileTable>
    </Container>
  )
}
