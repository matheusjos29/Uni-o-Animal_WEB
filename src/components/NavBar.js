import { Link } from 'react-router-dom';
import './NavBar.css'; // Certifique-se de ter seu arquivo CSS de estilos

function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Cadastro">Cadastro</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
