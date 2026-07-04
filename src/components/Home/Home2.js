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
              Soy Ingeniero Civil en Informática, especializado en{" "}
              <i>
                <b className="purple">desarrollo backend con Python</b>
              </i>
              , automatización de procesos y procesamiento de datos.
              <br />
              <br />
              Construyo{" "}
              <i>
                <b className="purple">
                  APIs REST, pipelines ETL y sistemas de extracción documental
                </b>
              </i>{" "}
              con
              <i>
                <b className="purple">
                  {" "}
                  Flask, PostgreSQL y Docker
                </b>
              </i>
              , tanto para clientes reales como para entornos institucionales.
              <br />
              <br />
              También trabajo el lado Full Stack con{" "}
              <b className="purple">React y JavaScript</b>, y exploro la{" "}
              <b className="purple">
                Visión por Computador e IA aplicada
              </b>{" "}
              para crear soluciones accesibles.
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
