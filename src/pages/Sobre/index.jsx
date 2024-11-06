import React from 'react';
import logo from '../../assets/Logo.png';
import fotoIsa from '../../assets/FotoIsa.jpg';
import fotoEdu from '../../assets/FotoEdu.jpg';
import fotoRaf from '../../assets/FotoRaf.jpg';
import fotoMar from '../../assets/FotoMar.jpg';
import fotoFel from '../../assets/FotoFel.png';
import { H4, H1, Img, IMG, CarouselWrapper, Container } from "./style";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

function Sobre() {
  return (
    <>
      <IMG src={logo} alt="Logo" />
      <Container>
      <H4>Healthy Haven: O Refúgio do Bem-Estar e Fitness</H4>
      <H1>
        Era uma vez, um site criado para transformar a jornada de saúde e bem-estar em algo mais simples e recompensador: o Healthy Haven.
        Criado por um grupo de entusiastas da saúde que acreditam que cada passo em direção a um estilo de vida saudável deveria ser celebrado,
        o Healthy Haven oferece uma ampla seleção de produtos de bem-estar e fitness, incluindo suplementos, equipamentos, produtos naturais, acessórios de yoga,
        e muito mais.
      </H1>

      <H4>A Jornada do Bem-Estar, Passo a Passo</H4>
      <H1>
        No Healthy Haven, cada compra vai além do produto adquirido. A cada compra realizada, o usuário recebe pontos de bem-estar, os Haven Points.
        Esses pontos simbolizam os passos dados em direção ao autocuidado e ao equilíbrio. A proposta é clara: quanto mais você investe na sua saúde e bem-estar, mais você ganha.
        Com o acúmulo dos Haven Points, os clientes podem resgatar recompensas, descontos e até participar de desafios e eventos exclusivos para membros da comunidade Healthy Haven.
      </H1>

      <H4>O Propósito</H4>
      <H1>
        Mais do que vender produtos, o Healthy Haven nasceu com o propósito de incentivar um estilo de vida equilibrado e feliz, onde cada cliente se sente valorizado em sua própria jornada.
        O programa de pontos é a maneira de tornar cada conquista visível e recompensada, criando uma experiência onde saúde e felicidade caminham juntas.
      </H1>
      <H4>Nosso time</H4>
      </Container>
      <CarouselWrapper>
        <Carousel>
          <Carousel.Item>
            <a href="https://github.com/Isabe1l4" target="_blank" rel="noopener noreferrer">
              <Img
                className="d-block w-100"
                src={fotoIsa}
                alt="Isabella Assumpção"
              />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://github.com/eduardofmonteiro" target="_blank" rel="noopener noreferrer">
              <Img
                className="d-block w-100"
                src={fotoEdu}
                alt="Eduardo Monteiro"
              />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://github.com/rafasalmeron" target="_blank" rel="noopener noreferrer">
              <Img
                className="d-block w-100"
                src={fotoRaf}
                alt="Rafael Salmeron"
              />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://github.com/May4357" target="_blank" rel="noopener noreferrer">
              <Img
                className="d-block w-100"
                src={fotoMar}
                alt="Marina Mayumi"
              />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://github.com/Felipe-Goncalves-Lima" target="_blank" rel="noopener noreferrer">
              <Img
                className="d-block w-100"
                src={fotoFel}
                alt="Felipe Gonçalves"
              />
            </a>
          </Carousel.Item>
        </Carousel>
      </CarouselWrapper>
    </>
  );
}

export default Sobre;
