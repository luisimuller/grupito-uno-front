// components/IntegranteContentPresentacion.jsx
import React from "react";

const IntegranteContentPresentacion = ({ nombre, fotoPerfil, presentacion }) => {
  return (
      <section id="presentacion">
        <h2 className="about-me">Sobre mí</h2>
        <div className="profile">
          <img src={fotoPerfil} alt={`Foto de ${nombre}`} className="profile-img" />
          {presentacion.map((parrafo, index) => (
            <p key={index} className="presentation-text">{parrafo}</p>
          ))}
        </div>
      </section>
  );
};

export default IntegranteContentPresentacion;
