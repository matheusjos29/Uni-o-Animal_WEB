import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Cadastro from './pages/Cadastro'; 

function App() {
  return (
    React.createElement(Router, null,
      React.createElement(NavBar),
      React.createElement(Routes, null,
        React.createElement(Route, { path: '/', element: React.createElement(Home) }),
        React.createElement(Route, { path: '/About', element: React.createElement(About) }),
        React.createElement(Route, { path: '/Cadastro', element: React.createElement(Cadastro) })
      )
    )
  );
}

export default App;
