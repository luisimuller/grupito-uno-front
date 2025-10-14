import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Más rutas vendrán después: /bitacora, /integrantes, /json, /api */}
    </Routes>
  );
}
