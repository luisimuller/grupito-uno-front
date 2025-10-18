// components/IntegranteFooter.jsx
import React from "react";

const IntegranteFooter = ({ nombre = "Mi Sitio", year = new Date().getFullYear() }) => {
  return (
    <footer className="site-footer" role="contentinfo">
      <p>© {year} {nombre} - Perfil Personal</p>
    </footer>
  );
};

export default IntegranteFooter;
