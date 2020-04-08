import React, { useState, useMemo } from 'react'

import { Form } from '@unform/web'
import history from '../../../../services/history'

import {
  Container,
  TopInfo,
  PeriodOpts,
  TotalHours,
  TableDiv,
  ResourceTable,
  BottomScreen,
} from './styles'
import Title from '../../../../components/Title'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
import DatePicker from '../../../../components/DatePicker'

export default function Edit({ history, location }) {
  const chosenOption = useMemo(() => {
    return location.state.projectSelected || false
  }, [location])

  const [projectSelected, setProjectSelected] = useState(chosenOption)

  return (
    <Container>
      <Title>
        {projectSelected
          ? 'Planejamento Projeto CBON - IN3289406 Ajustar Expurgo Banco'
          : 'Planejamento Recurso: Fulano Barbosa Pereira da Silva'}
      </Title>

      {projectSelected && (
        <TopInfo>
          <div>
            <div>
              <span>Data Início Prevista:</span>
              <span>12/01/2019</span>
            </div>
            <div>
              <span>Data Fim Prevista:</span>
              <span>24/07/2019</span>
            </div>
          </div>

          <TotalHours>
            <div>
              <span>Horas Técnicas:</span>
              <span>500:00</span>
            </div>
            <div>
              <span>Horas Realizadas:</span>
              <span>500:00</span>
            </div>
            <div>
              <span>Horas Disponíveis:</span>
              <span>500:00</span>
            </div>
          </TotalHours>
        </TopInfo>
      )}

      {!projectSelected && (
        <PeriodOpts>
          <div>
            <p>Periodo de:</p>
            <DatePicker />
          </div>
          <div>
            <p>Periodo até:</p>
            <DatePicker />
          </div>
          <Button darken>Consultar</Button>
        </PeriodOpts>
      )}

      <TableDiv>
        <Form>
          <ResourceTable>
            <thead>
              <tr>
                <th rowSpan="2">{projectSelected ? 'Recurso' : 'Projeto'}</th>
                <th>Jan/2019</th>
                <th>Fev/2019</th>
                <th>Mar/2019</th>
                <th>Abr/2019</th>
                <th>Mai/2019</th>
                <th>Jun/2019</th>
                <th>Jul/2019</th>
                <th>Ago/2019</th>
                <th>Set/2019</th>
                <th>Out/2019</th>
                <th>Nov/2019</th>
                <th>Dez/2019</th>
              </tr>
              <tr>
                <th>168</th>
                <th>168</th>
                <th>168</th>
                <th>168</th>
                <th>168</th>
                <th>168</th>
                <th>168</th>
                <th>168</th>
                <th>168</th>
                <th>168</th>
                <th>168</th>
                <th>168</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Fulano 1</td>
                <td>
                  <Input name="aa" />
                </td>
                <td>
                  <Input name="a1" />
                </td>
                <td>
                  <Input name="a2" />
                </td>
                <td>
                  <Input name="a3" />
                </td>
                <td>
                  <Input name="a4" />
                </td>
                <td>
                  <Input name="a5" />
                </td>
                <td>
                  <Input name="a6" />
                </td>
                <td>
                  <Input name="a7" />
                </td>
                <td>
                  <Input name="a8" />
                </td>
                <td>
                  <Input name="a9" />
                </td>
                <td>
                  <Input name="aa1" />
                </td>
                <td>
                  <Input name="aa2" />
                </td>
              </tr>
              <tr>
                <td>Fulano 1</td>
                <td>
                  <Input name="ba" />
                </td>
                <td>
                  <Input name="b1" />
                </td>
                <td>
                  <Input name="b2" />
                </td>
                <td>
                  <Input name="b3" />
                </td>
                <td>
                  <Input name="b4" />
                </td>
                <td>
                  <Input name="b5" />
                </td>
                <td>
                  <Input name="b6" />
                </td>
                <td>
                  <Input name="b7" />
                </td>
                <td>
                  <Input name="b8" />
                </td>
                <td>
                  <Input name="b9" />
                </td>
                <td>
                  <Input name="ba1" />
                </td>
                <td>
                  <Input name="ba2" />
                </td>
              </tr>
              <tr>
                <td>Fulano 1</td>
                <td>
                  <Input name="aa" />
                </td>
                <td>
                  <Input name="a1" />
                </td>
                <td>
                  <Input name="a2" />
                </td>
                <td>
                  <Input name="a3" />
                </td>
                <td>
                  <Input name="a4" />
                </td>
                <td>
                  <Input name="a5" />
                </td>
                <td>
                  <Input name="a6" />
                </td>
                <td>
                  <Input name="a7" />
                </td>
                <td>
                  <Input name="a8" />
                </td>
                <td>
                  <Input name="a9" />
                </td>
                <td>
                  <Input name="aa1" />
                </td>
                <td>
                  <Input name="aa2" />
                </td>
              </tr>
              <tr>
                <td>Fulano 1</td>
                <td>
                  <Input name="aa" />
                </td>
                <td>
                  <Input name="a1" />
                </td>
                <td>
                  <Input name="a2" />
                </td>
                <td>
                  <Input name="a3" />
                </td>
                <td>
                  <Input name="a4" />
                </td>
                <td>
                  <Input name="a5" />
                </td>
                <td>
                  <Input name="a6" />
                </td>
                <td>
                  <Input name="a7" />
                </td>
                <td>
                  <Input name="a8" />
                </td>
                <td>
                  <Input name="a9" />
                </td>
                <td>
                  <Input name="aa1" />
                </td>
                <td>
                  <Input name="aa2" />
                </td>
              </tr>
              <tr>
                <td>Fulano 1</td>
                <td>
                  <Input name="aa" />
                </td>
                <td>
                  <Input name="a1" />
                </td>
                <td>
                  <Input name="a2" />
                </td>
                <td>
                  <Input name="a3" />
                </td>
                <td>
                  <Input name="a4" />
                </td>
                <td>
                  <Input name="a5" />
                </td>
                <td>
                  <Input name="a6" />
                </td>
                <td>
                  <Input name="a7" />
                </td>
                <td>
                  <Input name="a8" />
                </td>
                <td>
                  <Input name="a9" />
                </td>
                <td>
                  <Input name="aa1" />
                </td>
                <td>
                  <Input name="aa2" />
                </td>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <td>TOTAL DE HORAS</td>
                <td>100</td>
                <td>100</td>
                <td>100</td>
                <td>100</td>
                <td>100</td>
                <td>100</td>
                <td>100</td>
                <td>100</td>
                <td>100</td>
                <td>100</td>
                <td>100</td>
                <td>100</td>
              </tr>
            </tfoot>
          </ResourceTable>
        </Form>
      </TableDiv>

      <BottomScreen>
        <span />
        <Button type="submit" darken big>
          Atualizar
        </Button>
        <Button
          type="button"
          big
          onClick={() => history.push('/menufoursys/alocation')}
        >
          Voltar
        </Button>
      </BottomScreen>
    </Container>
  )
}
