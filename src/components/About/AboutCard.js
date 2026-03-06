import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy <span className="purple">Bairon Sanhueza </span>
            de <span className="purple">Concepción, Chile</span>.
            <br />
            <span className="purple">Soy Ingeniero civil en informatica con un fuerte enfoque en análisis de datos, desarrollo backend/fullstack y Machine Learning.</span>
            <br />
            <br />
            Aparte de programar, ¡hay otras cosas que disfruto hacer!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Ver series o anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Escuchar punk, rap o cualquier genero
            </li>
            <li className="about-activity">
              <ImPointRight /> Tomar fotografias
            </li>
            <li className="about-activity">
              <ImPointRight /> Leer
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
