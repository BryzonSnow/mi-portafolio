import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import picar from "../../Assets/Projects/picar.png";
import dash from "../../Assets/Projects/dash.png";
import villanosImg from "../../Assets/Projects/villanos.png";
import chatImg from "../../Assets/Projects/chatImg.png";
import brieflygoImg from "../../Assets/Projects/brieflygo.png";
import duametricsImg from "../../Assets/Projects/duametrics.png";
import pdiImg from "../../Assets/Projects/pdi.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis más recientes <strong className="purple">trabajos</strong>
        </h1>
        <p style={{ color: "white" }}>
          Algunos proyectos en los que he trabajado últimamente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={duametricsImg}
              isBlog={false}
              title="Juguetea — DuaMetrics"
              description="Plataforma EdTech en producción para profesionales del Programa de Integración Escolar (PIE). DuaMetrics es el módulo de evaluación dentro de Juguetea: permite a docentes crear actividades y exámenes, y monitorear el progreso de estudiantes desde tablets y ordenadores. Backend en Python/Flask con API REST, PostgreSQL, Docker y tres perfiles de usuario."
              demoLink="https://juguetea.pythonanywhere.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={villanosImg}
              isBlog={false}
              title="Menú Digital Los Villanos"
              description="Solución e-commerce Full Stack para digitalizar el catálogo comercial de un restaurante local. Backend en Python/Flask con SQLAlchemy, API REST e integración de notificaciones automáticas vía WhatsApp. Desplegado en PythonAnywhere."
              ghLink="https://github.com/BryzonSnow/menu-villanos"
              demoLink="https://losvillanos.pythonanywhere.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pdiImg}
              isBlog={false}
              title="Sistema de Extracción de Datos — PDI"
              description="Plataforma web desarrollada durante mi práctica profesional en la Policía de Investigaciones de Chile. Automatiza la extracción y categorización de datos estructurados y no estructurados desde informes policiales con pipelines en Python (Pandas, PyMuPDF, pdfplumber, SQLAlchemy). Incluye web scraper con alertas vía WhatsApp y reportería en PDF/Excel. Reconocido como Practicante Destacado."
              highlight="Practicante Destacado"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brieflygoImg}
              isBlog={false}
              title="BrieflyGo - Desktop Daemon"
              description="Aplicación de escritorio nativa y descentralizada construida con Go y Wails. Funciona como un daemon concurrente (Goroutines) que recolecta noticias en segundo plano y notifica vía WhatsApp. Implementa arquitectura BYOK (Bring Your Own Key) y persistencia local con SQLite para evitar costos de infraestructura en la nube y optimizar el uso de APIs gratuitas mediante un modo Digest."
              ghLink="https://github.com/BryzonSnow/newsbot-desktop"
              demoLink="https://github.com/BryzonSnow/newsbot-desktop/releases/tag/v1.0.1"
            />
          </Col>
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
              imgPath={picar}
              isBlog={false}
              title="Navegación Autónoma (PiCar-X)"
              description="Tesis de grado: sistema de asistencia con Visión por Computador en un vehículo a escala. Entrené una CNN con PyTorch y YOLOv5 alcanzando 90 % mAP, con dataset propio de 1.500+ imágenes en Roboflow. Inferencia optimizada en Raspberry Pi 4 a 20 FPS en tiempo real."
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
