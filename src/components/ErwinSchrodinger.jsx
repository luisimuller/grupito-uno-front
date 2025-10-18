import React, { useEffect } from 'react';
import "../styles/ErwinSchrodinger.css";

// Importar imágenes con los nombres REALES
import profilePic from "../assets/img/PepeHernan.png";
import multilenguaje from "../assets/img/pepelepew.webp";
import multiplataforma from "../assets/img/pepefierrero.webp";
import multitarea from "../assets/img/pepemulti.webp";
import multijuegos from "../assets/img/pepebreakingbad.webp";
import lotr1 from "../assets/img/lotr1-pepe.png";
import lotr2 from "../assets/img/lotr2-pepe.png";
import lotr3 from "../assets/img/lotr3-pepe.png";
import spaceOddity from "../assets/img/pepespaceoddity.png";
import majorTom from "../assets/img/pepemajortom.png";
import anilloCapitanBeto from "../assets/img/pepeelanillodelcapitanbeto.png";
import IntegranteNav from './IntegranteNav';
import IntegranteHeader from './IntegranteHeader';
import IntegranteContent from './IntegranteContent';
import { useParams } from 'react-router-dom';
import IntegranteFooter from './IntegranteFooter';

const integrantes = [
  {
    id: 1, // Asumiendo que es el siguiente ID disponible
    nombre: "Erwin Schrödinger",
    subtitulo: "Calculando función de onda...",
    fotoPerfil: profilePic,
    presentacion: [
      "¡Buenas! Soy Erwin (Hernán Burgos), tengo 35 años y vivo en Ayacucho, Provincia de Buenos Aires, el mejor lugar para comer un asadito con sabor a nuestra tierra 🍖",
      "En constante formación, apasionado por la educación y la tecnología, disfruto crear soluciones prácticas para mejorar la gestión y el aprendizaje 📖",
    ],
    habilidades: [
      { 
        imagen: multilenguaje, 
        titulo: "Multilenguaje", 
        descripcion: "Un poco de todo: C#, Java, JavaScript, TypeScript, Python." 
      },
      { 
        imagen: multiplataforma, 
        titulo: "Multiplataforma", 
        descripcion: "Me desenvuelvo bien en diferentes entornos: Planificación, Diseño, Código, Implementación y Pruebas" 
      },
      { 
        imagen: multitarea, 
        titulo: "Multitarea", 
        descripcion: "Organizado, puedo hacer muchas cosas al mismo tiempo con buenos resultados." 
      },
      { 
        imagen: multijuegos, 
        titulo: "Multijuegos", 
        descripcion: "Químico de base, la ciencia como pasión. Preparo buen café." 
      },
    ],
    peliculas: [
      { 
        imagen: lotr1, 
        titulo: "El Señor de los Anillos", 
        descripcion: "La Comunidad del Anillo" 
      },
      { 
        imagen: lotr2, 
        titulo: "El Señor de los Anillos", 
        descripcion: "Las Dos Torres" 
      },
      { 
        imagen: lotr3, 
        titulo: "El Señor de los Anillos", 
        descripcion: "El Retorno del Rey" 
      },
    ],
    discos: [
      { 
        imagen: spaceOddity, 
        titulo: "Space Oddity", 
        link: "https://www.youtube.com/watch?v=iYYRH4apXDo" 
      },
      { 
        imagen: majorTom, 
        titulo: "Major Tom", 
        link: "https://www.youtube.com/watch?v=KQRaj1vcnrs" 
      },
      { 
        imagen: anilloCapitanBeto, 
        titulo: "El Anillo del Capitán Beto", 
        link: "https://www.youtube.com/watch?v=38jG_1bELEs" 
      },
    ],
    contacto: {
      email: "hernan.a.burgos@gmail.com",
      github: "https://github.com/burgosha",
    },
  },
];

const ErwinSchrodinger = () => {
  const { id } = useParams();
  const integrante = integrantes.find(int => int.id === parseInt(id)) || integrantes[0];

  useEffect(() => {
    // Efectos específicos para Erwin Schrödinger si son necesarios
  }, []);

  return (
    <div className="erwin-schrodinger">
      <IntegranteNav />
      <IntegranteHeader 
        nombre={integrante.nombre}
        subtitulo={integrante.subtitulo}
      />
      <IntegranteContent
        nombre={integrante.nombre}
        fotoPerfil={integrante.fotoPerfil}
        presentacion={integrante.presentacion}
        habilidades={integrante.habilidades}
        peliculas={integrante.peliculas}
        discos={integrante.discos}
        contacto={integrante.contacto} 
      />
     <IntegranteFooter nombre={integrante.nombre} />
    </div>
  );
};

export default ErwinSchrodinger;