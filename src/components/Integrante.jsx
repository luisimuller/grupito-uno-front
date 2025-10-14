// src/components/Integrante.jsx
import React from "react";
import { useParams } from "react-router-dom";

function Integrante() {
  const { id } = useParams();

  return (
    <div>
      <h2>Integrante {id}</h2>
      <p>Información individual de cada integrante.</p>
    </div>
  );
}

export default Integrante;
