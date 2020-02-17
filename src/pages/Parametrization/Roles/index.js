import React, { useEffect, useState } from 'react'

import { MdModeEdit } from 'react-icons/md'

import * as Yup from 'yup'
import { toast } from 'react-toastify'

import { Form } from '@rocketseat/unform'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import Title from '../../../components/Title'
import MaskInput from '../../../components/Unform/MaskInput'
import { formatPrice } from '../../../util/format'
import { roles } from '../../../services/API/calls'

import { Container, TopForm, RoleTable } from './styles'

export default function Roles() {
  const [roleList, setRoleList] = useState([])
  const [roleName, setRoleName] = useState('')
  const [hourlyCost, setHourlyCost] = useState('')
  const [editing, setEditing] = useState(false)
  const [selectedRole, setSelectedRole] = useState()

  useEffect(() => {
    getRolesList()
  }, [])

  async function getRolesList() {
    const response = await roles.getRoles()

    setRoleList(
      response.data.map(role => ({
        ...role,
        formattedPrice: formatPrice(parseFloat(role.vlMedio)),
      }))
    )
  }

  const schema = Yup.object().shape({
    name: Yup.string().required('Favor informar cargo'),
    price: Yup.number()
      .typeError('Favor digitar preço valido')
      .required('O valor é obrigatório'),
  })

  function handleCancel() {
    setEditing(false)
    setRoleName('')
    setHourlyCost('')
  }

  async function registerRole(data) {
    if (editing) {
      const role = {
        cdCargo: selectedRole,
        nmCargo: data.name,
        vlMedio: parseFloat(data.price),
      }
      try {
        await roles.updateRole(role)

        toast.success('Cargo alterado com sucesso!')
      } catch (error) {
        toast.error('Erro ao atualizar Cargo')
        return
      }
    } else {
      const role = {
        nmCargo: data.name,
        vlMedio: parseFloat(data.price),
      }

      try {
        await roles.addRole(role)

        toast.success('Cargo cadastrado com sucesso!')
      } catch (error) {
        toast.error('Erro ao cadastrar Perfil')
        return
      }
    }

    setEditing(false)
    setRoleName('')
    setHourlyCost('')
    getRolesList()
  }

  function handleEdit(role) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

    setRoleName(role.nmCargo)
    setHourlyCost(role.vlMedio)
    setEditing(true)
    setSelectedRole(role.cdCargo)
  }

  return (
    <Container>
      <Title>Parametrização: Cargos</Title>

      <Form schema={schema} onSubmit={registerRole}>
        <TopForm>
          <div>
            <p>Nome Cargo:</p>
            <Input
              name="name"
              value={roleName}
              onChange={e => setRoleName(e.target.value)}
            />
          </div>
          <div>
            <p>Custo Médio Hora:</p>
            <MaskInput
              name="price"
              prefix="R$"
              decimalSeparator=","
              thousandSeparator="."
              default={hourlyCost || ''}
              value={hourlyCost}
              onChange={e => setHourlyCost(e.target.value)}
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

      <RoleTable>
        <thead>
          <tr>
            <th>Código</th>
            <th>Cargo</th>
            <th>Custo Médio</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {roleList.length === 0 && (
              <td colSpan="4">Nenhum cargo encontrado</td>
            )}
          </tr>
          {roleList.length > 0 &&
            roleList.map(role => (
              <tr key={role.cdCargo}>
                <td>{role.cdCargo}</td>
                <td>{role.nmCargo}</td>
                <td>{role.formattedPrice}</td>
                <td>
                  <MdModeEdit
                    onClick={() => {
                      handleEdit(role)
                    }}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </RoleTable>
    </Container>
  )
}
