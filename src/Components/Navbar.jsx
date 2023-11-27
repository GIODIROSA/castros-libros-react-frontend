import { NavLink } from "react-router-dom";
import "../assets/style/navbar.css";
import cartIcon from "../assets/icons/cartIcon";
import profileIcon from "../assets/icons/profileIcon";
import logoNavBar from "../assets/icons/logoNavBar";
import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const cartIconSvg = cartIcon();
  const profileIconSvg = profileIcon();
  const logoNavBarSvg = logoNavBar();
  const { valoresContextoUsuario } = useContext(UsuarioContext);
  const { usuarioGlobal, setUsuarioGlobal } = valoresContextoUsuario;

  const cerrarSesion = () => {
    Swal.fire({
      title: "¿Está seguro de cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, salir",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        setUsuarioGlobal();
      }
    });
  };

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
          {usuarioGlobal && usuarioGlobal.rol === "admin" ? (
            <li>
              <NavLink to="/manager">Admin</NavLink>
            </li>
          ) : null}
          <p>|</p>
          <li>
            <NavLink to="/cart">{cartIconSvg}</NavLink>
          </li>
          {!usuarioGlobal || usuarioGlobal.length === 0 ? (
            <li>
              <NavLink to="/registro">{profileIconSvg}</NavLink>
            </li>
          ) : (
            <li>
              <NavLink onClick={cerrarSesion}>Cerrar sesión</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
