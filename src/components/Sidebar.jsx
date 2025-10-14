import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">NextHire Devs</h2>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/bitacora">Bitácora</Link></li>
          <li><Link to="/integrante/1">Integrante 1</Link></li>
          <li><Link to="/integrante/2">Integrante 2</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
