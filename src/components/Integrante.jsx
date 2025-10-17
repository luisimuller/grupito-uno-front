// // src/components/Integrante.jsx
// import React from "react";
// import { useParams } from "react-router-dom";

// function Integrante() {
//   const { id } = useParams();

//   // Información de cada integrante
//   const integrantes = {
//     1: { nombre: "Integrante 1", experiencia: "Experiencia SAP y Frontend" },
//     2: { nombre: "Integrante 2", experiencia: "Experiencia Backend y Node.js" },
//     3: { nombre: "Integrante 3", experiencia: "Experiencia UI/UX y Figma" },
//     4: { nombre: "Integrante 4", experiencia: "Experiencia DevOps y AWS" },
//     5: { nombre: "Integrante 5", experiencia: "Experiencia QA y Selenium" },
//   };

//   const integrante = integrantes[id];

//   if (!integrante) return <p>Integrante no encontrado</p>;

//   return (
//     <div className="integrante-container">
//       <h2>{integrante.nombre}</h2>
//       <p>Experiencia: {integrante.experiencia}</p>
//     </div>
//   );
// }

// export default Integrante;

// src/components/Integrante.jsx
import React from "react";
import { useParams } from "react-router-dom";
import GregoryKarta from "./GregoryKarta";
// Import otros componentes aquí

const Integrante = () => {
  const { id } = useParams();

  // Mapeo de IDs a componentes
  const integrantes = {
    "1": <div>Componente del Integrante 1</div>,
    "2": <div>Componente del Integrante 2</div>,
    "3": <GregoryKarta />,
    "4": <div>Componente del Integrante 4</div>,
    "5": <div>Componente del Integrante 5</div>,
  };

  return (
    <div className="integrante-container">
      {integrantes[id] || <div>Integrante no encontrado</div>}
    </div>
  );
};

export default Integrante;