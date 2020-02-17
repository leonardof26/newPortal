import React from 'react'
import ids from 'short-id'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import { Container, Menu, DropDownContent, DropDownColumn } from './styles'

export default function DropDownMenu({ keyValue, menuTitle, menuItens, path }) {
  const cleanMenuName = menuTitle
    .normalize('NFD')
    .replace(/[\u0300-\u036f\s]/g, '')
    .toLowerCase()

  function generateDropCollum(item) {
    return (
      <DropDownColumn key={ids.generate()}>
        {item.header !== '' && <h3>{item.header}</h3>}
        {item.menus.map(menu => {
          return (
            <Link key={ids.generate()} to={menu.link.url}>
              {menu.title}
            </Link>
          )
        })}
      </DropDownColumn>
    )
  }

  return (
    <Container
      currentPage={path.indexOf(cleanMenuName.toLowerCase()) !== -1}
      key={keyValue}
    >
      <Menu currentPage={path.indexOf(cleanMenuName.toLowerCase()) !== -1}>
        <div className="teste">
          <span>{menuTitle}</span>
          <i />
        </div>
        <DropDownContent>
          {menuItens.map(item => {
            return generateDropCollum(item)
          })}
        </DropDownContent>
      </Menu>
    </Container>
  )
}

DropDownMenu.propTypes = {
  keyValue: PropTypes.string.isRequired,
  menuTitle: PropTypes.string.isRequired,
  menuItens: PropTypes.arrayOf(PropTypes.object).isRequired,
  path: PropTypes.string.isRequired,
}
