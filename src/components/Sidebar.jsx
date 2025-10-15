import React from "react";
import { Link } from "react-router-dom";
import { INTEGRANTES } from "./Constantes";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">NextHire Devs</h2>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/bitacora">Bitácora</Link></li>
          {INTEGRANTES.map(member =>(
            <li><Link to={`/integrante/${member.id}`}>{member.nombre}</Link></li>
          ))}
          {/*  <li><Link to="/integrante/5">Integrante 5</Link></li> */}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
