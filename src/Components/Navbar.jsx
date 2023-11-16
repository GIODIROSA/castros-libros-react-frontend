import { NavLink } from "react-router-dom";
import "../assets/style/navbar.css";
import cartIcon from "../assets/style/icons/cartIcon";
import profileIcon from "../assets/style/icons/profileIcon";

const Navbar = () => {
  const cartIconSvg = cartIcon();
  const profileIconSvg = profileIcon();

  return (
    <>
      <nav className="navbar">
        <img
          className="libreria-navbar_logo"
          src="../../public/img/CastrosLogo.jpg"
          alt=""
        />
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favoritos</NavLink>
          </li>
          <p>|</p>
          <li>
            <NavLink to="/cart">{cartIconSvg}</NavLink>
          </li>
          <li>
            <NavLink to="/login">{profileIconSvg}</NavLink>
          </li>
          <li></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
