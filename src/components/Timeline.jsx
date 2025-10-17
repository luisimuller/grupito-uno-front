import React from "react";
import "../styles/timeline.css"; 

function Timeline({ entradas }) {
  return (
    <div className="bitacora-container">
      <div className="bitacora-line"></div>
      {entradas.map((entrada, idx) => (
        <div className="bitacora-entry" key={idx}>
          <p>{entrada.texto}</p>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
