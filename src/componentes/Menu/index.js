import { useLocation, Link } from "react-router-dom";
import "./Menu.css"; 


export default function Menu() {
  const location = useLocation();

  return (
    <nav className="ListaMenu">
      <ul className="ListaIcones">
        <li>
          <Link 
            to="/" 
            className={`MenuItem ${location.pathname === "/" ? "ativo" : ""}`}
          >
            Home
          </Link>
        </li>
        
        <li>
          <Link 
            to="/sobre" 
            className={`MenuItem ${location.pathname === "/sobre" ? "ativo" : ""}`}
          >
            Sobre
          </Link>
        </li>
        
        <li>
          <Link 
            to="/contato" 
            className={`MenuItem ${location.pathname === "/contato" ? "ativo" : ""}`}
          >
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
}