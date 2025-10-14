// src/components/MemberCard.jsx
import React from "react";
import { Link } from "react-router-dom";

function MemberCard({imagen, nombre, id}) {

  return (
    <Link to={`/integrante/${id}`}>
        <div className="team-card">
            <img src={imagen} alt={nombre} />
            <p>{nombre}</p>
        </div>
    </Link>
  );
}

export default MemberCard;