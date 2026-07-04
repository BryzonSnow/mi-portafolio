import React from "react";
import { Badge } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";

function ExperienceCard({ item }) {
  return (
    <div className="experience-card">
      <div className="experience-card-header">
        <span className="experience-year">{item.year}</span>
        <Badge bg="secondary" className="experience-type">
          {item.type}
        </Badge>
      </div>

      <h3 className="experience-title">{item.title}</h3>
      <p className="experience-organization">{item.organization}</p>

      {item.highlight && (
        <span className="experience-highlight">{item.highlight}</span>
      )}

      <p className="experience-description">{item.description}</p>

      <ul className="experience-stack">
        {item.stack.map((tech) => (
          <li key={tech}>
            <ImPointRight /> {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceCard;
