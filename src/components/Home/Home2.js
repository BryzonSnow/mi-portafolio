import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMÍTEME <span className="purple"> PRESENTARME </span>
            </h1>
            <p className="home-about-body">
              Soy un Ingeniero civil en informatica apasionado por resolver problemas complejos y
              llevar modelos teóricos a la práctica.
              <br />
              <br />
              Mis herramientas principales incluyen
              <i>
                <b className="purple">
                  {" "}
                  Python, SQL, React y tecnologías de Machine Learning.{" "}
                </b>
              </i>
              <br />
              <br />
              Mis áreas de interés abarcan desde la &nbsp;
              <i>
                <b className="purple">Automatización y el Análisis de Datos </b>{" "}
                hasta la integración de{" "}
                <b className="purple">Inteligencia Artificial en Robótica</b>{" "}
                para crear soluciones accesibles.
              </i>
              <br />
              <br />
              También disfruto construyendo productos completos, aplicando mi
              experiencia en bases de datos y frameworks modernos como{" "}
              <b className="purple">Vite, Tailwind y Flask</b> para desarrollar
              aplicaciones web funcionales.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
