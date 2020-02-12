import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Form, Input } from '@rocketseat/unform'
import { FaSpinner } from 'react-icons/fa/'
import Button from '../../components/Button'
import logo from '../../assets/Images/4SYS.png'

import { signInRequest } from '../../store/modules/auth/actions'

import { Container, Menu, CompanyInfo } from './styles'

export default function Login() {
  const { loading } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  async function handleSubmit(data) {
    dispatch(signInRequest(data))
  }

  return (
    <Container>
      <Menu>
        <CompanyInfo>
          <img src={logo} alt="Foursy" />
          <p>Portal Foursys</p>
        </CompanyInfo>

        <Form onSubmit={handleSubmit}>
          <strong>Login:</strong>
          <Input
            name="user"
            type="userName"
            placeholder="seu usuário de rede"
          />
          <strong>Senha:</strong>
          <Input name="password" type="password" placeholder="*****" />

          <div>
            {loading && <FaSpinner color="#ddd" size={20} />}
            <div>
              <Link to="/" disabled={loading}>
                Cancelar
              </Link>
              <Button darken type="submit" disabled={loading}>
                Entrar
              </Button>
            </div>
          </div>
        </Form>
      </Menu>
    </Container>
  )
}
