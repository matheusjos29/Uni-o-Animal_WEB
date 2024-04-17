import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Cadastro from './pages/Cadastro'; 

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cadastro" element={<Cadastro />} /> {/* Adicionando a rota para Cadastro */}
      </Routes>
    </Router>
  );
}

export default App;
