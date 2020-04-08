import React from 'react'

import { Form } from '@unform/web'

import Modal from 'react-bootstrap/Modal'

import { Container, TopInfo, ActivitiesTable, BottomButtons } from './styles'

import Input from '../../../../../components/Input'
import Button from '../../../../../components/Button'
import Header from '../../../../../components/Modal/Header'

const activitiesList = [
  'Entendimento do Projeto',
  'Geração de Propostas',
  'Apoio Comercial',
  'Planejamento do Projeto (P1)',
  'Detalhamento de Requisitos',
  'Análise da Solução (Fluxos e Diagramas)',
  'Protótipo',
  'Modelagem de Dados',
  'Elaboração de Testes (Casos e Plano)',
  'DePara Tela x Transaçao/BD',
  'Especificação de Programa / Componente',
  'Preparar Ambiente',
  'Criação e Solicitação de Boletos',
  'Conferência de Boletos',
  'Codificação',
  'Testes Transacionais',
  'Testes Unitários - Desenvolvimento',
  'Revisão em Par',
  'Correções durante o desenv. (Retrabalho)',
  'Execução de PVRT',
  'Testes do Aceite Interno',
  'Testes do Aceite Externo',
  'Homologação no ambiente do Cliente',
  'Homologação Gestor',
  'Implantação',
  'Correção de erro em Produção',
  'Gerar documentação Cliente',
  'Auditoria de Qualidade (PPQA)',
  'Gestão de Configuração (P9)',
  'Medidas e Análise (P10)',
  'Apoio a Cliente - Não cobrado',
  'Reunião',
  'Reunião de Acompanhamento',
  'Acompanhamento de Projeto',
  'Curso Interno',
  'Contratação de Novos Recursos',
  'Outros',
  'Avaliação',
  'Treinamento',
  'Indisponibilidade de Ambiente Externo',
  'Indisponib. Comunicação com Amb.Externo',
  'Indisponibilidade de Ambiente Interno',
  'Publicação de Aplicações em Servidores',
  'Pesquisas para Desenvolvimento',
  'HPM Interno',
]

export default function Activities({ show, close, goBack }) {
  return (
    <Container show={show} onHide={close} id="modal" size="lg">
      <Header>Atividades do BMB - Liberação de Seguradoras</Header>

      <Form>
        <Modal.Body>
          <TopInfo>
            <div>
              <strong>Dia:</strong>
              <span>20/03/2020}</span>
            </div>
            <div>
              <strong>Horas Lançadas:</strong>
              <span>00:00</span>
            </div>
            <div>
              <strong>Horas Não Justificadas:</strong>
              <span>08:00</span>
            </div>
          </TopInfo>

          <ActivitiesTable>
            <thead>
              <tr>
                <th id="Atividade">Atividade</th>
                <th id="Horas">Horas</th>
                <th id="Descricao">Descrição</th>
              </tr>
            </thead>

            <tbody>
              {activitiesList.map((title, index) => {
                return (
                  <tr key={String(index)}>
                    <td>
                      <button type="button">{title}</button>
                    </td>
                    <td>
                      <Input
                        className="hourInput"
                        name={`0,${index}`}
                        maxLength={5}
                      />
                    </td>
                    <td>
                      <textarea name={`1,${index}`} />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </ActivitiesTable>
        </Modal.Body>

        <Modal.Footer>
          <BottomButtons>
            <Button darken type="submit" onClick={goBack}>
              Salvar
            </Button>
            <Button type="button" onClick={goBack}>
              Voltar
            </Button>
          </BottomButtons>
        </Modal.Footer>
      </Form>
    </Container>
  )
}
