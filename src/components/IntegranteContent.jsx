// components/IntegranteContent.jsx
import React from "react";

const IntegranteContent = ({
  nombre,
  fotoPerfil,
  presentacion,
  habilidades,
  peliculas,
  discos,
  contacto,
}) => {
  return (
    <main className="container">
      {/* Presentación */}
      <section id="presentacion">
        <h2 className="about-me">Sobre mí</h2>
        <div className="profile">
          <img src={fotoPerfil} alt={`Foto de ${nombre}`} className="profile-img" />
          {presentacion.map((parrafo, index) => (
            <p key={index} className="presentation-text">{parrafo}</p>
          ))}
        </div>
      </section>

      {/* Habilidades */}
      <section id="habilidades">
        <h2 className="my-works">Mis habilidades</h2>
        <div className="team-cards-lm">
          {habilidades.map((hab, index) => (
            <div key={index} className="team-card-lm">
              <img src={hab.imagen} alt={hab.titulo} />
              <h3>{hab.titulo}</h3>
              <p>{hab.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Películas favoritas */}
      <section id="peliculas-favoritas">
        <h2 className="my-works">Mis películas favoritas</h2>
        <div className="team-cards-lm">
          {peliculas.map((pel, index) => (
            <div key={index} className="team-card-lm">
              <img src={pel.imagen} alt={pel.titulo} />
              <h3>{pel.titulo}</h3>
              <p>{pel.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Discos favoritos */}
      <section id="Discos-favoritos">
        <h2 className="my-works">Mis discos favoritos</h2>
        <div className="team-cards-lm">
          {discos.map((disco, index) => (
            <div key={index} className="team-card-lm-music">
              <img src={disco.imagen} alt={disco.titulo} />
              <a href={disco.link} target="_blank" rel="noopener noreferrer">
                {disco.titulo}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="contact-section">
        <h2>Contacto</h2>
        <p>
          Puedes escribirme a:{" "}
          <a href={`mailto:${contacto.email}`}>{contacto.email}</a>
        </p>
        <p>
          O visitar mi{" "}
          <a href={contacto.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </section>
    </main>
  );
};

export default IntegranteContent;
