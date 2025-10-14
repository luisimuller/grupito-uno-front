import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Bitacora from "./components/Bitacora";
import Integrante from "./components/Integrante";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bitacora" element={<Bitacora />} />
            <Route path="/integrante/:id" element={<Integrante />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
