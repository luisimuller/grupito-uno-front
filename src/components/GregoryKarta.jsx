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
import IntegranteNav from './IntegranteNav';
import IntegranteHeader from './IntegranteHeader';
import IntegranteContent from './IntegranteContent';
import { useParams } from 'react-router-dom';
import IntegranteFooter from './IntegranteFooter';

const integrantes = [
  {
    id: 3,
    nombre: "Gregory Karta",
    subtitulo: "Buscando nuevos desafíos",
    fotoPerfil: profilePic,
    presentacion: [
      "¡Hola! Soy Gregory Karta, pero me dicen Greg, tengo 29 años y vivo en Franck, provincia de Santa Fe.",
      "Me apasionan la ciencia y la tecnología, y disfruto mucho aprender cosas nuevas. Estoy en constante búsqueda de mejorar mis habilidades, explorar diferentes áreas de conocimiento y descubrir qué es lo que realmente me motiva.",
    ],
    habilidades: [
      { imagen: pepeDev, titulo: "Programación", descripcion: "Me gusta programar y crear páginas web." },
      { imagen: pepeCiberseg, titulo: "Ciberseguridad", descripcion: "La ciberseguridad es mi fuerte." },
      { imagen: pepeTeam, titulo: "Team work", descripcion: "Fan del trabajo en equipo." },
      { imagen: pepeLogic, titulo: "Creatividad", descripcion: "Siempre busco soluciones originales." },
    ],
    peliculas: [
      { imagen: interstellar, titulo: "Interstellar", descripcion: "Una obra maestra de ciencia ficción." },
      { imagen: backToTheFuture, titulo: "Back to the Future", descripcion: "Un verdadero clásico del cine." },
      { imagen: harryPotter, titulo: "Harry Potter", descripcion: "Excelente adaptación." },
    ],
    discos: [
      { imagen: blackSabbath, titulo: "Black Sabbath - Paranoid", link: "https://www.youtube.com/watch?v=fWvKvOViM3g" },
      { imagen: laRenga, titulo: "La Renga - Detonador de sueños", link: "https://www.youtube.com/watch?v=AVmemTyiN2g" },
      { imagen: megadeth, titulo: "Megadeth - Youthanasia", link: "https://www.youtube.com/watch?v=Sl_I8P6oY8s" },
    ],
    contacto: {
      email: "gregorykarta@gmail.com",
      github: "https://github.com/LeonelDonnet",
    },
  },
];

const GregoryKarta = () => {
  useEffect(() => {
    // Código JavaScript si es necesario
  }, []);

  const {id} = useParams();
  const integrante = integrantes.find(int => int.id === parseInt(id));
  if (!integrante) {
    return <div>Integrante no encontrado</div>;
  }

  return (
    <div className="gregory-karta">
      {/* Navegación */}
      <IntegranteNav />

      {/* Encabezado */}
      <IntegranteHeader
        nombre={integrante.nombre}
        subtitulo={integrante.subtitulo} />

      {/* Contenido principal */}
      <IntegranteContent
        nombre={integrante.nombre}
        fotoPerfil={integrante.fotoPerfil}
        presentacion={integrante.presentacion}
        habilidades={integrante.habilidades}
        peliculas={integrante.peliculas}
        discos={integrante.discos}
        contacto={integrante.contacto} 
      />

      {/* Footer */}
      <IntegranteFooter nombre={integrante.nombre} />
    </div>
  );
};

export default GregoryKarta;