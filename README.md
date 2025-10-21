# NextHire - Devs

## IFTS29 - Front End - TP1  
### Equipo:
**Grupo 1**
---
### Integrantes

- **Burgos Hernán Andrés** — *(Erwin Schrödinger)*  
- **Chiovetta Nicolás** — *(Jack Smith)*  
- **Donnet Leonel** — *(Gregory Karta)*  
- **Leroy Delgado Adrián Agustín** — *(Carlos HardDrive)*  
- **Müller Luisina** — *(Lola Sparrow)*  

---

## Título del Proyecto

**NextHire - Devs**  
Una plataforma para descubrir desarrolladores con estilo, creatividad y habilidades únicas (?).

---

## 📝 Descripción

**NextHire - Devs** es un proyecto desarrollado como parte del **Trabajo Práctico 2 de la materia Front End** del **IFTS N°29**.  
El objetivo fue crear una aplicación web dinámica donde cada integrante del equipo cuenta con su propio perfil interactivo, utilizando React para la creación de componentes con una metodología de reutilización.  

Cada perfil presenta:
- Información personal y profesional del desarrollador.
- Habilidades técnicas y blandas.
- Películas y discos favoritos.
- Enlaces de contacto y redes.

Además, el sitio se integra con una **API de Only Pepes** para agregar un toque divertido y visual, demostrando el uso de **fetch** y manejo de datos externos en React.

---

## Tecnologías Utilizadas

- **Vite** — Entorno de desarrollo rápido para React.  
- **React.js** — Librería principal para la construcción de componentes.  
- **React Router DOM** — Navegación entre vistas y perfiles.  
- **CSS Modules / Stylesheets** — Estilos personalizados por integrante.  
- **JavaScript (ES6+)** — Lógica y manejo de datos.  
- **Only Pepes API** — Fuente de datos para componentes dinámicos.  

---

## Estructura de Archivos

NextHire-Devs/\
│\
├── public/\
│\
└── src/\
├── assets/\
│ └── img/ # Imágenes del proyecto\
│\
├── components/ # Componentes principales del sitio\
│ ├── ApiOnlyPepes.jsx\
│ ├── Bitacora.jsx\
│ ├── Footer.jsx\
│ ├── Header.jsx\
│ ├── Home.jsx\
│ ├── Integrante.jsx\
│ ├── IntegranteContent.jsx\
│ ├── IntegranteFooter.jsx\
│ ├── IntegranteHeader.jsx\
│ ├── IntegranteNav.jsx\
│ ├── MemberCard.jsx\
│ ├── Sidebar.jsx\
│ └── Timeline.jsx\
│\
├── data/\
│ ├── integrantes.json # Datos de los integrantes (perfiles)\
│ └── integrantesData.js # Estructura JS para consumo alternativo\
│\
├── styles/ # Hojas de estilo individuales\
│ ├── apionlypepes.css\
│ ├── bitacora.css\
│ ├── carlosharddrive.css\
│ ├── erwinschrodinger.css\
│ ├── gregorykarta.css\
│ ├── jacksmith.css\
│ ├── lolasparrow.css\
│ ├── home.css\
│ ├── index.css\
│ └── timeline.css\
│\
├── App.jsx\
├── App.css\
├── main.jsx\
└── routes.jsx\


