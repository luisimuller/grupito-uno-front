// src/components/Integrante.jsx
import React from "react";
import { useParams } from "react-router-dom";

function Integrante() {
  const { id } = useParams();

  // Información de cada integrante
  const integrantes = {
    1: { nombre: "Integrante 1", experiencia: "Experiencia SAP y Frontend" },
    2: { nombre: "Integrante 2", experiencia: "Experiencia Backend y Node.js" },
    3: { nombre: "Integrante 3", experiencia: "Experiencia UI/UX y Figma" },
    4: { nombre: "Integrante 4", experiencia: "Experiencia DevOps y AWS" },
    5: { nombre: "Integrante 5", experiencia: "Experiencia QA y Selenium" },
  };

  const integrante = integrantes[id];

  if (!integrante) return <p>Integrante no encontrado</p>;

  return (
    <div className="integrante-container">
      <h2>{integrante.nombre}</h2>
      <p>Experiencia: {integrante.experiencia}</p>
    </div>
  );
}

export default Integrante;
