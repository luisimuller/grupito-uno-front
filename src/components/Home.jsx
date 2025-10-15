import React from "react";
import Footer from "./Footer";
import "../styles/index.css";
import "../styles/home.css";
import erwinImg from "../assets/img/PepeHernan.png";
import carlosImg from "../assets/img/Carlos_HardDraive3.jpg";
import gregoryImg from "../assets/img/PepeLeo.jpeg";
import jackImg from "../assets/img/PepeNico.jpeg";
import lolaImg from "../assets/img/PepeLola.jpeg";
import MemberCard from "./MemberCard";
function Home() {

  const members = [
    {nombre:"Erwin Schrödinger", imagen:erwinImg, id:1},
    {nombre:"Carlos HardDrive", imagen:carlosImg, id:2},
    {nombre:"Gregory Karta", imagen:gregoryImg, id:3},
    {nombre:"Jack Smith", imagen:jackImg, id:4},
    {nombre:"Lola Sparrow", imagen:lolaImg, id:5}
  ];

  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <h1>NextHire Devs</h1>
        <p className="subtitle"><strong>en desarrollo...</strong></p>
        <div className="loading-bar-container">
          <div className="loading-bar-fill"></div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="home-main">
        {/* Presentación */}
        <section id="presentacion" className="presentacion">
          <h2>Sobre Nosotros</h2>
          <p>
            Somos estudiantes de la carrera de Desarrollo de Software y actualmente cursamos el segundo año de la
            tecnicatura. Esta página web ha sido desarrollada en el marco de la asignatura <strong>Desarrollo Web Frontend</strong>,
            con el propósito de aplicar los conocimientos adquiridos y documentar nuestras prácticas. A través de este proyecto
            buscamos consolidar competencias técnicas, fomentar el trabajo en equipo y sentar las bases para nuestra futura
            inserción en la industria tecnológica. Nuestro objetivo es formarnos de manera sólida en el ámbito del desarrollo
            de software, incorporando metodologías y buenas prácticas que nos permitan enfrentar los desafíos del mundo profesional.
          </p>
        </section>

        {/* Integrantes */}
        <section id="integrantes" className="integrantes">
          <h2>Integrantes</h2>
          <p>Accedé al perfil de cada integrante para conocer más sobre ellos</p>

          <div className="team-cards">
            {members.map(member => (
              <MemberCard nombre={member.nombre} imagen={member.imagen} id={member.id} />
            ))}
            {/* <div className="team-card">
              <img src={erwinImg} alt="Erwin Schrödinger" />
              <p>Erwin Schrödinger </p>
            </div>
            <div className="team-card">
              <img src={carlosImg} alt="Carlos HardDrive" />
              <p>Carlos HardDrive</p>
            </div>
            <div className="team-card">
              <img src={gregoryImg} alt="Gregory Karta" />
              <p>Gregory Karta</p>
            </div>
            <div className="team-card">
              <img src={jackImg} alt="Jack Smith" />
              <p>Jack Smith</p>
            </div>
            <div className="team-card">
              <img src={lolaImg} alt="Lola Sparrow" />
              <p>Lola Sparrow</p>
            </div>*/}
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="contacto">
          <h2>Contacto</h2>
          <p>Puedes escribirnos a: <a href="mailto:contacto@nexthire.com">contacto@nexthire.com</a></p>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <p>© 2025 Equipo NextHire Devs - Proyecto académico</p>
      </footer>
    </div>
  );
}

export default Home;