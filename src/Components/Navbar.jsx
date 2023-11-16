import { NavLink } from "react-router-dom";
import "../assets/style/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
          <img className="libreria-navbar_logo" src="../../public/img/CastrosLogo.jpg" alt="" />
        <div className="libreria-navbar_contenedor-listado">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/cart">Carrito</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
