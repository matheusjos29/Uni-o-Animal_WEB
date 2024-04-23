import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Certifique-se de ter seu arquivo CSS de estilos

function NavBar() {
  return (
    React.createElement('div', { className: 'navbar' },
      React.createElement('ul', null,
        React.createElement('li', null,
          React.createElement(Link, { to: '/' }, 'Home')
        ),
        React.createElement('li', null,
          React.createElement(Link, { to: '/About' }, 'About')
        ),
        React.createElement('li', null,
          React.createElement(Link, { to: '/Cadastro' }, 'Cadastro')
        )
      )
    )
  );
}

export default NavBar;
