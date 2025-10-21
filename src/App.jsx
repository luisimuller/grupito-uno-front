// src/App.jsx
import React from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Bitacora from "./components/Bitacora";
import Integrante from "./components/Integrante";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import ApiOnlyPepes from "./components/ApiOnlyPepes";

function App() {
  return (
    <Router>
      <div className="app">
        {/* Sidebar fijo */}
        <Sidebar />

        {/* Contenido principal */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bitacora" element={<Bitacora />} />
            <Route path="/integrante/:id" element={<Integrante />} />
            <Route path="/apionlypepes" element={<ApiOnlyPepes />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
