import React, { useEffect, useState } from 'react'

import Carousel from 'react-bootstrap/Carousel'

import slide1 from '../../assets/Images/slide1.png'
import slide2 from '../../assets/Images/slide2.png'
import slide3 from '../../assets/Images/slide3.png'
import crm from '../../assets/Images/MP-CRM.png'
import email from '../../assets/Images/MP-E-mail.png'
import mantis from '../../assets/Images/MP-Mantis.png'
import metod from '../../assets/Images/MP-Metodologia.png'
import ramais from '../../assets/Images/MP-Ramais.png'
import rh from '../../assets/Images/MP-RH.png'
import sgo from '../../assets/Images/MP-SGO.png'
import temp from '../../assets/Images/MP-Temporário.png'

import { Container, Box, BoxContainer } from './styles'

export default function Main() {
  const isIE = /* @cc_on!@ */ false || !!document.documentMode

  return (
    <Container>
      <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active" />
          <li data-target="#demo" data-slide-to="1" />
          <li data-target="#demo" data-slide-to="2" />
        </ul>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide1} alt="Los Angeles" width="1100" height="500" />
          </div>
          <div className="carousel-item">
            <img src={slide2} alt="Chicago" width="1100" height="500" />
          </div>
          <div className="carousel-item">
            <img src={slide3} alt="New York" width="1100" height="500" />
          </div>
        </div>
      </div>

      <BoxContainer>
        <Box isIE={isIE}>
          <a
            href="http://4sys-aws01/Metodologia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img alt="Metodologia" src={metod} />
            </div>
            <span>Metodologia</span>
          </a>
        </Box>
        <Box isIE={isIE}>
          <a
            href="https://sgo.assisteconline.com.br/sgo_foursys/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img alt="SGO" src={sgo} />
            </div>
            <span>SGO</span>
          </a>
        </Box>
        <Box isIE={isIE}>
          <a
            href="http://webmail.foursys.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img alt="E-mail" src={email} />
            </div>
            <span>E-mail</span>
          </a>
        </Box>
        <Box isIE={isIE}>
          <a
            href="http://4sys-pap05:8080/ListaRamais/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img alt="Lista de Ramais" src={ramais} />
            </div>
            <span>Lista de Ramais</span>
          </a>
        </Box>
        <Box isIE={isIE}>
          <a
            href="file://10.1.255.249/temporario/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img alt="Temporario" src={temp} />
            </div>
            <span>Temporário</span>
          </a>
        </Box>
        <Box isIE={isIE}>
          <a
            href="http://mantis.devops.foursys.com/login_page.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img alt="Mantis" src={mantis} />
            </div>
            <span>Mantis</span>
          </a>
        </Box>
        <Box isIE={isIE}>
          <a
            href="https://crm.foursys.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img alt="CRM" src={crm} />
            </div>
            <span>CRM</span>
          </a>
        </Box>
        <Box isIE={isIE}>
          <a
            href="http://54.147.166.34/srs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img alt="Recrutamento" src={rh} />
            </div>
            <span className="texto">Recrutamento</span>
          </a>
        </Box>
      </BoxContainer>
    </Container>
  )
}
