import React, { useState } from 'react'

import DatePicker from 'react-datepicker'
import { MdAdd } from 'react-icons/md'
import { FaRegSave } from 'react-icons/fa'

import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import { Form } from '@unform/web'

import Title from '../../../../components/Title'
import Table from '../../../../components/Table'
import Button from '../../../../components/Button'
import Input from '../../../../components/Input'
import {
  Container,
  TopInfo,
  StaticInfo,
  TopTotals,
  TableTitle,
  TableDiv,
  ResultsTable,
  RevenueTable,
  Select,
  SVG,
  AddButton,
  CostTable,
  ExpensesTable,
  Footer,
  Teste,
} from './styles'

const teste = [{ label: 'teste', value: 1 }]

const customStyles = {
  control: base => ({
    ...base,
    height: 27,
    minHeight: 27,
    position: 'initial',
  }),
}

export default function Edit() {
  const [hideSave, setHideSave] = useState(false)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const maxHeight =
        Math.max(document.body.scrollHeight, document.body.offsetHeight) -
        document.body.clientHeight
      const isShow = currPos.y < -maxHeight + 30
      if (isShow !== hideSave) setHideSave(isShow)
    },
    [hideSave]
  )

  return (
    <Container>
      <Title>Precificação Projeto: CBON - IN3289406 Ajustar </Title>

      <Form>
        <TopInfo>
          <StaticInfo>
            <div>
              <p>Nível Desconto:</p>
              <Input name="nivel" disabled value="1" />
            </div>
            <div>
              <p>Data Inicio Desenvolvimento:</p>
              <Input name="begin" disabled value="10/01/2019" />
            </div>
            <div>
              <p>Data Fim Desenvolvimento:</p>
              <Input name="end" disabled value="10/01/2019" />
            </div>
          </StaticInfo>
          <TopTotals>
            <div>
              <span>Prazo Projeto:</span>
              <span>Horas Projeto:</span>
              <span>Valor Projeto:</span>
            </div>
            <div>
              <span>347 dias</span>
              <span>10000 horas</span>
              <span>R$ 158.754,00</span>
            </div>
          </TopTotals>
        </TopInfo>
      </Form>

      <TableDiv>
        <div>
          <TableTitle>Resultado</TableTitle>
          <ResultsTable>
            <thead>
              <tr>
                <th>Receita Bruta</th>
                <th>Receita Liquida</th>
                <th>Custo Folha</th>
                <th>Custo Despesa</th>
                <th>Custo Total(F + D)</th>
                <th>MD(RL - CT)</th>
                <th>Resultado (%)</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>R$ 5.200,00</td>
                <td>R$ 5.200,00</td>
                <td>R$ 5.200,00</td>
                <td>R$ 5.200,00</td>
                <td>R$ 5.200,00</td>
                <td>R$ 5.200,00</td>
                <td>70%</td>
              </tr>
            </tbody>
          </ResultsTable>
        </div>
      </TableDiv>

      <TableDiv>
        <div>
          <TableTitle>Receita</TableTitle>

          <Form>
            <RevenueTable>
              <thead>
                <tr>
                  <th />
                  <th>Cód.</th>
                  <th>Recurso/Perfil</th>
                  <th>Valor Hora</th>
                  <th>Total Horas Alocadas</th>
                  <th>Valor Total</th>
                  <th>Valor Total c/ Desconto</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <SVG>
                      <span>X</span>
                    </SVG>
                  </td>
                  <td>001</td>
                  <td>
                    <Select
                      styles={customStyles}
                      name="teste1"
                      options={teste}
                    />
                  </td>
                  <td>R$ 52,00</td>
                  <td>
                    <Input name="inp" />
                  </td>
                  <td>R$ 5200,00</td>
                  <td>R$ 5000,00</td>
                </tr>
                <tr>
                  <td colSpan="7">
                    <AddButton>
                      <MdAdd size={29} />
                      <span>Adicionar novo recurso</span>
                    </AddButton>
                  </td>
                </tr>
              </tbody>

              <tfoot>
                <tr>
                  <td colSpan="3">TOTAL</td>
                  <td>R$ 208,00</td>
                  <td>80:00 </td>
                  <td>20.800,00 </td>
                  <td>20.000,00 </td>
                </tr>
              </tfoot>
            </RevenueTable>
          </Form>
        </div>
      </TableDiv>

      <TableDiv scroll>
        <div>
          <TableTitle>Custo</TableTitle>

          <Form>
            <CostTable>
              <thead>
                <tr>
                  <th rowSpan="2" />
                  <th rowSpan="2">N°</th>
                  <th rowSpan="2">Recurso/Cargo</th>
                  <th rowSpan="2">Custo médio Recurso</th>
                  <th rowSpan="2">Total Horas Alocadas</th>
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
                </tr>
                <tr>
                  <th>176</th>
                  <th>144</th>
                  <th>168</th>
                  <th>160</th>
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
                  <td>
                    <SVG>
                      <span>X</span>
                    </SVG>
                  </td>
                  <td>1</td>
                  <td>
                    <Select
                      styles={customStyles}
                      name="teste"
                      options={teste}
                    />
                  </td>
                  <td>
                    <Input name="aaa" />
                  </td>
                  <td>500.00</td>
                  <td>
                    <Input name="aaa" />
                  </td>
                  <td>
                    <Input name="bbb" />
                  </td>
                  <td>
                    <Input name="ccc" />
                  </td>
                  <td>
                    <Input name="ddd" />
                  </td>
                  <td>
                    <Input name="eee" />
                  </td>
                  <td>
                    <Input name="fff" />
                  </td>
                  <td>
                    <Input name="gggg" />
                  </td>
                  <td>
                    <Input name="gggg" />
                  </td>
                  <td>
                    <Input name="gggg" />
                  </td>
                  <td>
                    <Input name="gggg" />
                  </td>
                </tr>
                <tr>
                  <td colSpan="15">
                    <AddButton>
                      <MdAdd size={29} />
                      <span>Adicionar novo recurso</span>
                    </AddButton>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3">TOTAL</td>
                  <td>R$ 19.824</td>
                  <td>2000:00 </td>
                  <td>80:00 </td>
                  <td>80:00 </td>
                  <td>80:00 </td>
                  <td>80:00 </td>
                  <td>80:00 </td>
                  <td>80:00 </td>
                  <td>80:00 </td>
                  <td>80:00 </td>
                  <td>80:00 </td>
                  <td>80:00 </td>
                </tr>
              </tfoot>
            </CostTable>

            <ExpensesTable>
              <thead>
                <tr>
                  <th />
                  <th colSpan="2">Total</th>
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
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>DESPESAS</td>
                  <td colSpan="2">R$1000,00</td>
                  <td>
                    <Input name="hhh" />
                  </td>
                  <td>
                    <Input name="hhh" />
                  </td>
                  <td>
                    <Input name="hhh" />
                  </td>
                  <td>
                    <Input name="hhh" />
                  </td>
                  <td>
                    <Input name="hhh" />
                  </td>
                  <td>
                    <Input name="hhh" />
                  </td>
                  <td>
                    <Input name="hhh" />
                  </td>
                  <td>
                    <Input name="hhh" />
                  </td>
                  <td>
                    <Input name="hhh" />
                  </td>
                  <td>
                    <Input name="hhh" />
                  </td>
                </tr>
              </tbody>
            </ExpensesTable>
          </Form>
        </div>
      </TableDiv>

      <Footer>
        {hideSave && <Button>Salvar</Button>}
        <Button>Voltar</Button>
        <Button darken>Mandar Para Aprovação</Button>
      </Footer>

      <Teste botton={hideSave}>
        <FaRegSave />
      </Teste>
    </Container>
  )
}
