import React, { useEffect } from 'react';
import "../styles/GregoryKarta.css";

// Importar imágenes con los nombres REALES
import profilePic from "../assets/img/PepeLeo.jpeg";
import pepeDev from "../assets/img/pepeDev.png";
import pepeCiberseg from "../assets/img/pepeCiberseg.png";
import pepeTeam from "../assets/img/pepeTeam.png";
import pepeLogic from "../assets/img/pepeLogic.png";
import interstellar from "../assets/img/interstellar.jpg";
import backToTheFuture from "../assets/img/Back_to_the_future.webp";
import harryPotter from "../assets/img/harrypotter.jpg";
import blackSabbath from "../assets/img/Black_Sabbath_-_Paranoid.jpg";
import laRenga from "../assets/img/larenga.png";
import megadeth from "../assets/img/Megadeth_Youthanasia.jpg";

const GregoryKarta = () => {
  useEffect(() => {
    // Código JavaScript si es necesario
  }, []);

  return (
    <div className="gregory-karta">
      {/* Navegación */}
      <nav className="site-nav">
        <a href="#presentacion">Sobre mí</a>
        <a href="#habilidades">Mis Habilidades</a>
        <a href="#peliculas-favoritas">Películas favoritas</a>
        <a href="#Discos-favoritos">Discos favoritos</a>
        <a href="/">Volver al equipo</a>
      </nav>

      {/* Encabezado */}
      <header className="site-header">
        <h1>Gregory Karta</h1>
        <p className="subtitle">Buscando nuevos desafíos</p>
        <div className="loading-bar-container">
          <div className="loading-bar-fill"></div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="container">
        {/* Presentación */}
        <section id="presentacion">
          <h2 className="about-me">Sobre mí</h2>
          <div className="profile">
            <img 
              src={profilePic} 
              alt="Foto de Gregory" 
              className="profile-img"
            />
            <p className="presentation-text">¡Hola! Soy Gregory Karta, pero me dicen Greg, tengo 29 años y vivo en Franck, provincia de Santa Fe.</p>
            <p className="presentation-text">Me apasionan la ciencia y la tecnología, y disfruto mucho aprender cosas nuevas. Estoy en constante búsqueda de mejorar mis habilidades, explorar diferentes áreas de conocimiento y descubrir qué es lo que realmente me motiva. Me considero una persona curiosa, con ganas de crecer tanto a nivel personal como profesional.</p>
          </div>
        </section>

        {/* Habilidades */}
        <section id="habilidades">
          <h2 className="my-works">Mis habilidades</h2>
          <div className="team-cards-lm">
            <div className="team-card-lm">
              <img src={pepeDev} alt="Programación" />
              <h3>Programación</h3>
              <p>Me gusta programar y crear páginas web.</p>
            </div>
            <div className="team-card-lm">
              <img src={pepeCiberseg} alt="Experto en ciberseguridad" />
              <h3>Ciberseguridad</h3>
              <p>La ciberseguridad es mi fuerte.</p>
            </div>
            <div className="team-card-lm">
              <img src={pepeTeam} alt="Trabajo en equipo" />
              <h3>Team work</h3>
              <p>Fan del trabajo en equipo</p>
            </div>
            <div className="team-card-lm">
              <img src={pepeLogic} alt="Pensamiento lógico" />
              <h3>Creatividad</h3>
              <p>Siempre busco soluciones originales y disfruto expresarme de forma eficiente.</p>
            </div>
          </div>
        </section>

        {/* Películas favoritas */}
        <section id="peliculas-favoritas">
          <h2 className="my-works">Mis películas favoritas</h2>
          <div className="team-cards-lm">
            <div className="team-card-lm">
              <img src={interstellar} alt="Interstellar" />
              <h3>Interstellar</h3>
              <p>Una obra maestra de ciencia ficción que mezcla emociones y viajes espaciales.</p>
            </div>
            <div className="team-card-lm">
              <img src={backToTheFuture} alt="Back to the future" />
              <h3>Back to the future</h3>
              <p>Un verdadero clásico del cine.</p>
            </div>
            <div className="team-card-lm">
              <img src={harryPotter} alt="Harry Potter y la piedra filosofal" />
              <h3>Harry Potter</h3>
              <p>La primera de la saga, excelente adaptación.</p>
            </div>
          </div>
        </section>

        {/* Discos favoritos */}
        <section id="Discos-favoritos">
          <h2 className="my-works">Mis discos favoritos</h2>
          <div className="team-cards-lm">
            <div className="team-card-lm-music">
              <img src={blackSabbath} alt="Black Sabbath" />
              <a href="https://www.youtube.com/watch?v=fWvKvOViM3g" target="_blank" rel="noopener noreferrer">
                Black Sabbath - Paranoid
              </a>
            </div>
            <div className="team-card-lm-music">
              <img src={laRenga} alt="La renga" />
              <a href="https://www.youtube.com/watch?v=AVmemTyiN2g" target="_blank" rel="noopener noreferrer">
                La renga - Detonador de sueños
              </a>
            </div>
            <div className="team-card-lm-music">
              <img src={megadeth} alt="Megadeth" />
              <a href="https://www.youtube.com/watch?v=Sl_I8P6oY8s" target="_blank" rel="noopener noreferrer">
                Megadeth - Youthanasia
              </a>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="contact-section">
          <h2>Contacto</h2>
          <p>Puedes escribirme a: <a href="mailto:gregorykarta@gmail.com">gregorykarta@gmail.com</a></p>
          <p>O visitar mi <a href="https://github.com/LeonelDonnet" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <p>© 2025 Gregory Karta - Perfil Personal</p>
      </footer>

      <canvas id="laserCanvas"></canvas>
    </div>
  );
};

export default GregoryKarta;