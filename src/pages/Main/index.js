import React, { useEffect } from 'react'

import Carousel from 'react-bootstrap/Carousel'
import { teste } from '../../services/API/calls'

import img1 from '../../assets/Images/imagem1.png'
import img2 from '../../assets/Images/imagem2.png'
import img3 from '../../assets/Images/imagem3.png'

import { Container, LateralMenu } from './styles'

export default function Main() {
  useEffect(() => {
    teste()
  }, [])

  return (
    <Container>
      <Carousel controls={false} className="Carousel">
        <Carousel.Item>
          <img src={img1} alt="Primeira Imagem" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={img2} alt="Segunda Imagem" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={img3} alt="Terceira Imagem" />
        </Carousel.Item>
      </Carousel>

      <LateralMenu>
        <ul>
          <a
            href="http://4sys-aws01/Metodologia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Metodologia
          </a>
          <a
            href="https://sgo.assisteconline.com.br/sgo_foursys/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SGO
          </a>
        </ul>
        <ul>
          <a
            href="http://webmail.foursys.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            E-mail
          </a>
          <a
            href="http://4sys-pap05:8080/ListaRamais/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lista de Ramais
          </a>
        </ul>
        <ul>
          <a
            href="http://mantis.devops.foursys.com/login_page.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mantis
          </a>
          <a
            href="http://54.147.166.34/srs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Recrutamento
          </a>
        </ul>
      </LateralMenu>
    </Container>
  )
}
