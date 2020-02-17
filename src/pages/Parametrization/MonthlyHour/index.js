import React from 'react'

import { Form, Input } from '@rocketseat/unform'

import {
  Container,
  Title,
  CodeForm,
  Select,
  YearTable,
  BottomScreen,
} from './styles'

const years = [
  { label: '2000', value: '2000' },
  { label: '2001', value: '2001' },
  { label: '2002', value: '2002' },
  { label: '2003', value: '2003' },
  { label: '2004', value: '2004' },
  { label: '2005', value: '2005' },
  { label: '2006', value: '2006' },
  { label: '2007', value: '2007' },
  { label: '2008', value: '2008' },
  { label: '2009', value: '2009' },
  { label: '2010', value: '2010' },
  { label: '2011', value: '2011' },
  { label: '2012', value: '2012' },
  { label: '2013', value: '2013' },
  { label: '2014', value: '2014' },
  { label: '2015', value: '2015' },
  { label: '2016', value: '2016' },
  { label: '2017', value: '2017' },
  { label: '2018', value: '2018' },
  { label: '2019', value: '2019' },
  { label: '2020', value: '2020' },
  { label: '2021', value: '2021' },
]

export default function MonthlyHour() {
  return (
    <Container>
      <Title>Parametrização: Quantidade Horas Mês</Title>

      <CodeForm>
        <p>Ano:</p>
        <Select name="year" options={years} />
      </CodeForm>

      <Form>
        <YearTable>
          <thead>
            <tr>
              <th>Janeiro</th>
              <th>Fevereiro</th>
              <th>Março</th>
              <th>Abril</th>
              <th>Maio</th>
              <th>Junho</th>
              <th>Julho</th>
              <th>Agosto</th>
              <th>Setembro</th>
              <th>Outubro</th>
              <th>Novembro</th>
              <th>Dezembro</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <Input name="january" />
              </td>
              <td>
                <Input name="feb" />
              </td>
              <td>
                <Input name="mar" />
              </td>
              <td>
                <Input name="apr" />
              </td>
              <td>
                <Input name="may" />
              </td>
              <td>
                <Input name="jun" />
              </td>
              <td>
                <Input name="jul" />
              </td>
              <td>
                <Input name="aug" />
              </td>
              <td>
                <Input name="sep" />
              </td>
              <td>
                <Input name="oct" />
              </td>
              <td>
                <Input name="nov" />
              </td>
              <td>
                <Input name="dec" />
              </td>
            </tr>
          </tbody>
        </YearTable>

        <BottomScreen>
          <a />
          <button type="submit">Atualizar</button>
        </BottomScreen>
      </Form>
    </Container>
  )
}
