import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import picar from "../../Assets/Projects/picar.png";
import dash from "../../Assets/Projects/dash.png";
import villanosImg from "../../Assets/Projects/villanos.png";
import chatImg from "../../Assets/Projects/chatImg.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis mas recientes <strong className="purple">trabajos</strong>
        </h1>
        <p style={{ color: "white" }}>
          Unos cuantos projectos en los que he trabajo ultimamente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatImg}
              isBlog={false}
              title="Sistema de Mensajería en Tiempo Real Multicliente"
              description="Plataforma bidireccional construida con Node.js y Socket.io. Cuenta con dos clientes independientes (React y Vue 3) sincronizados en tiempo real, tipado estricto con TypeScript y manejo avanzado de estado (Zustand/Pinia)."
              ghLink="https://github.com/BryzonSnow/prueba-tecnica-chat"
              demoLink="https://prueba-tecnica-chat.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={villanosImg}
              isBlog={false}
              title="Menú Digital Los Villanos"
              description="Solución comercial autoadministrable para un restaurante local. Permite la gestión eficiente de categorías y platos mediante una interfaz limpia. Backend desarrollado con Python y Flask, utilizando SQLAlchemy con SQLite para la base de datos, y Bootstrap para un frontend adaptable."
              ghLink="https://github.com/BryzonSnow/menu-villanos"
              demoLink="https://losvillanos.pythonanywhere.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={picar} // Reemplaza con la variable de tu imagen importada
              isBlog={false}
              title="Navegación Autónoma (PiCar-X)"
              description="Sistema de asistencia para personas con discapacidad motora. Implementa modelos de Machine Learning y Deep Learning en un vehículo a escala para procesar imágenes en tiempo real, reconocer señales y navegar autónomamente. Construido con Python, TensorFlow, PyTorch, Keras, Roboflow y Pandas sobre entornos Linux."
              ghLink="https://github.com/BryzonSnow/Mark-6"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dash}
              isBlog={false}
              title="Dashboard Accidentes Biobío"
              description="Panel interactivo para visualizar y analizar la accidentabilidad en la Región del Biobío. Extracción, limpieza y modelado de datos crudos para transformar métricas en información útil y accesible. Desarrollado utilizando Python, Pandas, SQL y Streamlit."
              ghLink="https://github.com/BryzonSnow/analisis-vial-biobio"
              demoLink="https://bryzonsnow-analisis-vial-biobio-app-ijnjlu.streamlit.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
