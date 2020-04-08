import React from 'react'

import { Form } from '@unform/web'

import {
  Container,
  TopInfo,
  Select,
  AccessList,
  AccessBlock,
  BlockTitle,
  BottomInfo,
  BottomScreen,
} from './styles'

import Title from '../../../components/Title'
import CheckBox from '../../../components/CheckBox'
import Button from '../../../components/Button'

export default function AccessProfile() {
  return (
    <Container>
      <Title>Parametrização: Perfil de Acesso</Title>

      <Form>
        <TopInfo>
          <p>Perfil:</p>
          <Select name="year" options={[]} />
        </TopInfo>

        <AccessList>
          <AccessBlock>
            <BlockTitle>Horas(CCH)</BlockTitle>
            <div>
              <CheckBox />
              <span>Lançamento Horas</span>
            </div>
            <div>
              <CheckBox />
              <span>Lançamento Horas Histórico</span>
            </div>
            <div>
              <CheckBox />
              <span>Consulta de Atualizações</span>
            </div>
            <div>
              <CheckBox />
              <span>Consulta Horas Recurso</span>
            </div>
          </AccessBlock>
          <AccessBlock>
            <BlockTitle>Projeto</BlockTitle>
            <div>
              <CheckBox />
              <span>Cadastro de Projeto</span>
            </div>
            <div>
              <CheckBox />
              <span>Edição de Projeto</span>
            </div>
            <div>
              <CheckBox />
              <span>Vizualização de Projetos</span>
            </div>
            <div>
              <CheckBox />
              <span>Exclusão de Projeto</span>
            </div>
          </AccessBlock>
          <AccessBlock>
            <BlockTitle>Recurso</BlockTitle>
            <div>
              <CheckBox />
              <span>Cadastro de Recurso</span>
            </div>
            <div>
              <CheckBox />
              <span>Edição de Recurso</span>
            </div>
            <div>
              <CheckBox />
              <span>Vizualização de Recursos</span>
            </div>
            <div>
              <CheckBox />
              <span>Exclusão de Recurso</span>
            </div>
          </AccessBlock>

          <AccessBlock>
            <BlockTitle>Mapa de Alocação</BlockTitle>
            <div>
              <CheckBox />
              <span>Visualização Mapa de Alocação</span>
            </div>
            <div>
              <CheckBox />
              <span>Edição Mapa de Alocação</span>
            </div>
          </AccessBlock>
          <AccessBlock>
            <BlockTitle>Precificação</BlockTitle>
            <div>
              <CheckBox />
              <span>Visualização Precificação</span>
            </div>
            <div>
              <CheckBox />
              <span>Edição Precificação</span>
            </div>
          </AccessBlock>
          <AccessBlock>
            <BlockTitle>Perfil</BlockTitle>
            <div>
              <CheckBox />
              <span>Visualização Perfil</span>
            </div>
            <div>
              <CheckBox />
              <span>Edição Perfil</span>
            </div>
          </AccessBlock>
          <AccessBlock>
            <BlockTitle>Relatórios</BlockTitle>
            <div>
              <CheckBox />
              <span>Projetos</span>
            </div>
            <div>
              <CheckBox />
              <span>Banco de Horas</span>
            </div>
            <div>
              <CheckBox />
              <span>Horas Alocadas por Recurso</span>
            </div>
          </AccessBlock>
          <AccessBlock>
            <BlockTitle>Parametrizações</BlockTitle>
            <div>
              <CheckBox />
              <span>Perfil de Acesso</span>
            </div>
            <div>
              <CheckBox />
              <span>Quantidade Hora Mês</span>
            </div>
            <div>
              <CheckBox />
              <span>Perfil Venda Cliente</span>
            </div>
            <div>
              <CheckBox />
              <span>Custo Cargo</span>
            </div>
            <div>
              <CheckBox />
              <span>Tecnologia</span>
            </div>
          </AccessBlock>
        </AccessList>

        <BottomInfo>
          <p>Nível Aprovação Precificação:</p>
          <Select name="nivel" />
        </BottomInfo>

        <BottomScreen>
          <span />
          <Button type="submit" darken big>
            Atualizar
          </Button>
        </BottomScreen>
      </Form>
    </Container>
  )
}
