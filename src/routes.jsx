import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";

export default function RoutesComponent() {
  return (
    <div className="app-container">
      <Sidebar />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Agregá más rutas después */}
        </Routes>

        <Footer />
      </div>
    </div>
  );
}
