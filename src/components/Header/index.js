import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { signOutRequest } from '../../store/modules/auth/actions'

import { menus } from '../../assets/menuItens'
import logo from '../../assets/Images/4SYS.png'

import DropDownMenu from './DropDownMenu'
import { Container, Content, Profile, DropDownExit, UserButton } from './styles'

export default function Header({ path }) {
  const { signed } = useSelector(state => state.auth)
  const { firstName, lastName } = useSelector(state => state.user.profile) || ''
  const dispatch = useDispatch()

  const nameInitials = useMemo(
    () =>
      firstName && lastName
        ? `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()
        : '',

    [firstName, lastName]
  )

  const userName = useMemo(
    () => (firstName && lastName ? `${firstName} ${lastName}` : ''),
    [firstName, lastName]
  )

  function handleLogout() {
    dispatch(signOutRequest())
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="Foursys" />
          </Link>
          <h1>Portal Foursys</h1>

          {signed &&
            menus.map(item => {
              return (
                <DropDownMenu
                  keyValue={item.title}
                  menuTitle={item.title}
                  menuID={item.id}
                  menuItens={item.itens}
                  path={path}
                  key={`menu:${item.title}`}
                />
              )
            })}
        </nav>

        {signed ? (
          <Profile>
            <div>
              <strong>Bom dia!</strong>
              <strong>{userName}</strong>
            </div>

            <div className="userButton">
              <UserButton>
                {nameInitials}
                <DropDownExit>
                  <button type="button" onClick={handleLogout}>
                    Sair
                  </button>
                </DropDownExit>
              </UserButton>
            </div>
          </Profile>
        ) : (
          <Link to="/login" className="loginButton">
            Entrar
          </Link>
        )}
      </Content>
    </Container>
  )
}

Header.propTypes = {
  path: PropTypes.string.isRequired,
}
