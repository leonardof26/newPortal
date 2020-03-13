import React, { useRef } from 'react'

import { Link } from 'react-router-dom'

import { MdEdit, MdDone, MdMoreHoriz } from 'react-icons/md'
import SwitchSelector from 'react-switch-selector'

import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

import {
  Container,
  TopForm,
  ReactSelect,
  TableDiv,
  ProjectsTable,
  Pagination,
  DropDown,
  Teste,
} from './styles'

import Title from '../../../components/Title'

const customStyles = {
  control: base => ({
    ...base,
    height: 32,
    minHeight: 32,
    position: 'initial',
  }),
}

export default function AlocationMap() {
  const tableRef = useRef()

  const popover = (
    <Popover
      id="popover-basic"
      style={{
        top: '45px !important',
        background: '#7159c1',
        margin: '15px 0 0 0',
      }}
    >
      {/* <Popover.Title as="h3">Popover right</Popover.Title> */}
      <Popover.Content>
        <div>
          <MdEdit color="#5fc9f8" />
          <span>Editar</span>
        </div>
        <div>
          <MdDone color="#53d769" />
          <span>Confirmar</span>
        </div>
      </Popover.Content>
    </Popover>
  )

  return (
    <Container>
      <Title>Mapa Alocação</Title>

      <TopForm>
        <div>
          <p>Diretoria:</p>
          <ReactSelect styles={customStyles} />
        </div>
        <div>
          <p>Gerentes:</p>
          <ReactSelect styles={customStyles} />
        </div>
        <div>
          <p>Status:</p>
          <ReactSelect styles={customStyles} />
        </div>
        <div>
          <SwitchSelector
            options={[
              {
                label: 'Projetos',
                value: 1,
                selectedBackgroundColor: '#222239',
              },
              {
                label: 'Recursos',
                value: 2,
                selectedBackgroundColor: '#222239',
              },
            ]}
          />
        </div>
      </TopForm>

      <div className="serchInput">
        <input />
      </div>

      <TableDiv>
        <ProjectsTable ref={tableRef}>
          <thead>
            <tr>
              <th rowSpan="2">Id</th>
              <th rowSpan="2">Projeto</th>
              <th rowSpan="2">Gerente Executivo</th>
              <th rowSpan="2">Gerente</th>
              <th rowSpan="2">Total Horas Alocadas</th>
              <th colSpan="6">Semestre</th>
              <th rowSpan="2">Ações</th>
            </tr>
            <tr>
              <th>Jan/19</th>
              <th>Fev/19</th>
              <th>Mar/19</th>
              <th>Abr/19</th>
              <th>Mai/19</th>
              <th>Jun/19</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>6322</td>
              <td>
                <Link to="/menufoursys/alocation/edit">
                  CBON - IN3289406 Ajustar Expurgo banco - 237
                </Link>
              </td>
              <td>Claudia Sato</td>
              <td>Viviane de Oliveira</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>

              <td>
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={popover}
                >
                  <MdMoreHoriz size={25} />
                </OverlayTrigger>
              </td>
            </tr>
            <tr>
              <td>6322</td>
              <td>CBON - IN3289406 Ajustar Expurgo banco - 237</td>
              <td>Claudia Sato</td>
              <td>Viviane de Oliveira</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>

              <td>
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={popover}
                >
                  <MdMoreHoriz size={25} />
                </OverlayTrigger>
              </td>
            </tr>
            <tr>
              <td>6322</td>
              <td>CBON - IN3289406 Ajustar Expurgo banco - 237</td>
              <td>Claudia Sato</td>
              <td>Viviane de Oliveira</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>

              <td>
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={popover}
                >
                  <MdMoreHoriz size={25} />
                </OverlayTrigger>
              </td>
            </tr>
            <tr>
              <td>6322</td>
              <td>CBON - IN3289406 Ajustar Expurgo banco - 237</td>
              <td>Claudia Sato</td>
              <td>Viviane de Oliveira</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>

              <td>
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={popover}
                >
                  <MdMoreHoriz size={25} />
                </OverlayTrigger>
              </td>
            </tr>
            <tr>
              <td>6322</td>
              <td>CBON - IN3289406 Ajustar Expurgo banco - 237</td>
              <td>Claudia Sato</td>
              <td>Viviane de Oliveira</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>

              <td>
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={popover}
                >
                  <MdMoreHoriz size={25} />
                </OverlayTrigger>
              </td>
            </tr>
            <tr>
              <td>6322</td>
              <td>CBON - IN3289406 Ajustar Expurgo banco - 237</td>
              <td>Claudia Sato</td>
              <td>Viviane de Oliveira</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>

              <td>
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={popover}
                >
                  <MdMoreHoriz size={25} />
                </OverlayTrigger>
              </td>
            </tr>
            <tr>
              <td>6322</td>
              <td>CBON - IN3289406 Ajustar Expurgo banco - 237</td>
              <td>Claudia Sato</td>
              <td>Viviane de Oliveira</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>

              <td>
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={popover}
                >
                  <MdMoreHoriz size={25} />
                </OverlayTrigger>
              </td>
            </tr>
            <tr>
              <td>6322</td>
              <td>CBON - IN3289406 Ajustar Expurgo banco - 237</td>
              <td>Claudia Sato</td>
              <td>Viviane de Oliveira</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>

              <td>
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={popover}
                >
                  <MdMoreHoriz size={25} />
                </OverlayTrigger>
              </td>
            </tr>
            <tr>
              <td>6322</td>
              <td>CBON - IN3289406 Ajustar Expurgo banco - 237</td>
              <td>Claudia Sato</td>
              <td>Viviane de Oliveira</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>

              <td>
                <Teste>
                  <MdMoreHoriz size={25} />
                </Teste>
              </td>
            </tr>
            <tr>
              <td>6322</td>
              <td>CBON - IN3289406 Ajustar Expurgo banco - 237</td>
              <td>Claudia Sato</td>
              <td>Viviane de Oliveira</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>
              <td>500:00</td>

              <td>
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={popover}
                  container={tableRef.current}
                >
                  <MdMoreHoriz size={25} />
                </OverlayTrigger>
              </td>
            </tr>
          </tbody>
        </ProjectsTable>
      </TableDiv>

      <Pagination>
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
          <span>Anterior</span>
        </OverlayTrigger>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>...</span>
        <span>13</span>
        <span>Proximo</span>
      </Pagination>
    </Container>
  )
}
