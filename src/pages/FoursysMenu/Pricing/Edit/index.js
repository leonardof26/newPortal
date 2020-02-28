import React from 'react'

import DatePicker from 'react-datepicker'
import { MdCancel } from 'react-icons/md'
import { Form } from '@unform/web'

import Title from '../../../../components/Title'
import Table from '../../../../components/Table'
import Input from '../../../../components/Input'
import { Container, Select } from './styles'

const teste = [{ label: 'teste', value: 1 }]

export default function Edit() {
  return (
    <Container>
      <Title>Precificação Projeto: CBON - IN3289406 Ajustar </Title>

      <div>
        <Form>
          <Table>
            <thead>
              <tr>
                <th rowSpan="2" />
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
              </tr>
              <tr>
                <th>176</th>
                <th>144</th>
                <th>168</th>
                <th>160</th>
                <th>168</th>
                <th>168</th>
                <th>168</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <MdCancel />
                </td>
                <td>1</td>
                <td>
                  <Select name="teste" options={teste} />
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
              </tr>
              <tr>
                <td colSpan="11">Adicionar novo Recurso</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td rowSpan="3">TOTAL</td>
                <td>R$ 19.824</td>
                <td>2000:00 </td>
                <td>80:00 </td>
                <td>80:00 </td>
                <td>80:00 </td>
                <td>80:00 </td>
                <td>80:00 </td>
                <td>80:00 </td>
                <td>80:00 </td>
              </tr>
            </tfoot>
          </Table>
        </Form>
      </div>
    </Container>
  )
}
