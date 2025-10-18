// IntegranteHeader.jsx
import React from "react";

const IntegranteHeader = ({ nombre, subtitulo }) => {
  return (
    <header className="site-header">
      <h1>{nombre}</h1>
      <p className="subtitle">{subtitulo}</p>
      <div className="loading-bar-container">
        <div className="loading-bar-fill"></div>
      </div>
    </header>
  );
};

export default IntegranteHeader;
