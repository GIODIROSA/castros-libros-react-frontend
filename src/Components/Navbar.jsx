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
      <nav className="navbar">
        <div className="libreria-navbar_logo">
        {logoNavBarSvg}
      </div>
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
