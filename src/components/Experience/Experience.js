import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";
import experienceData from "./experienceData";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mi <strong className="purple">trayectoria</strong>
        </h1>
        <p className="experience-intro">
          Un recorrido desde mis primeras prácticas profesionales hasta el
          desarrollo independiente con Python, pasando por docencia, la PDI y
          proyectos desplegados en producción.
        </p>

        <div className="experience-timeline">
          {experienceData.map((item, index) => (
            <div className="experience-timeline-item" key={`${item.year}-${item.title}`}>
              <div className="experience-timeline-marker">
                <span className="experience-timeline-dot" />
                {index < experienceData.length - 1 && (
                  <span className="experience-timeline-line" />
                )}
              </div>
              <ExperienceCard item={item} />
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Experience;
