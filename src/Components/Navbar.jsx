import { NavLink } from "react-router-dom";
import "../assets/style/navbar.css";
import cartIcon from "../assets/icons/cartIcon";
import profileIcon from "../assets/icons/profileIcon";
import logoNavBar from "../assets/icons/logoNavBar";

const Navbar = () => {
  const cartIconSvg = cartIcon();
  const profileIconSvg = profileIcon();
  const logoNavBarSvg = logoNavBar();

  return (
    <>
      <nav className="libreria-navbar">
        <div className="libreria-navbar_container-logo">
        <NavLink to="/">{logoNavBarSvg}</NavLink>
      </div>
        <ul className="libreria-navbar_nav-links">
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
            <NavLink to="/registro">{profileIconSvg}</NavLink>
          </li>
          <li></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
