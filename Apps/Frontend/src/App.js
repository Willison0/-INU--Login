import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Registro from "./components/Registro";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header"></header>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          {/* Ruta para redirigir a Login por defecto */}
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
