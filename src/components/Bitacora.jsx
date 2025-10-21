import React from "react";
import "../styles/timeline.css"; 
import "../styles/bitacora.css"; 
const Bitacora = () => {
  const bitacora = [
    {
      fechaDia: "20/10/2025",
      entradas: [
        { emoji: "🔌", texto: "Se integró la API OnlyPepes al proyecto React para mostrar memes de Pepe aleatorios." },
        { emoji: "🎨", texto: "Se diseñó y estilizó el componente ApiOnlyPepes manteniendo la misma estética del home." },
        { emoji: "⚡", texto: "Se implementó fetching de datos con estados de carga y manejo de errores." },
        { emoji: "📱", texto: "Se agregó funcionalidad de historial de Pepes y diseño responsive." },
        { emoji: "🔄", texto: "Se configuró la actualización automática y botón para obtener nuevos Pepes." },
        { emoji: "⚡", texto: "Se configuró el proyecto React/Vite desde cero y se logró que se muestre la página base." },
        { emoji: "🛠️", texto: "Se corrigieron problemas de rutas e importación de CSS e imágenes." },
        { emoji: "🖥️", texto: "Se acomodó el sidebar para que no se solapara con el contenido." },
        { emoji: "📘", texto: "Se comenzó a trabajar en la Bitácora y la Timeline." }
      ],
    },
  ];

  return (
    <div className="bitacora-container">
      <h1 className="bitacora-title">Registro de avances del equipo NextHire Devs</h1>
      {bitacora.map((dia, index) => (
        <div key={index} className="dia-bloque">
          <h2>{dia.fechaDia}</h2>
          <div className="timeline">
            {dia.entradas.map((entrada, i) => (
              <div key={i} className="timeline-entry">
                <span className="emoji">{entrada.emoji}</span>
                <div className="contenido">{entrada.texto}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bitacora;
