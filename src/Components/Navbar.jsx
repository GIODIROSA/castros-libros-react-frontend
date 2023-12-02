import { NavLink } from "react-router-dom";
import "../assets/style/navbar.css";
import CartIcon from "../assets/icons/cartIcon";
import profileIcon from "../assets/icons/profileIcon";
import logoNavBar from "../assets/icons/logoNavBar";
import { useContext, useState } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import Swal from "sweetalert2";
import { LibrosContext } from "../context/LibrosContext";

const Navbar = () => {
  const { valoresContextoLibros } = useContext(LibrosContext);
  const { carrito } = valoresContextoLibros;
  const profileIconSvg = profileIcon();
  const logoNavBarSvg = logoNavBar();
  const { valoresContextoUsuario } = useContext(UsuarioContext);
  const { usuarioGlobal, setUsuarioGlobal } = valoresContextoUsuario;

  const cerrarSesion = () => {
    Swal.fire({
      title: "¿Está seguro de cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5d573f",
      cancelButtonColor: "#b3ae8df9",
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
    <nav className="libreria-navbar">
      <div className="libreria-navbar_container-logo">
        <NavLink to="/">{logoNavBarSvg}</NavLink>
        {usuarioGlobal && usuarioGlobal.nombre ? (
          <p>Hola, {usuarioGlobal?.nombre}</p>
        ) : (
          ""
        )}
      </div>

      <ul className="libreria-navbar_nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {usuarioGlobal && usuarioGlobal?.rol === "admin" ? (
          <li>
            <NavLink to="/manager">Admin</NavLink>
          </li>
        ) : null}
        <p>|</p>
        <li>
          <NavLink to="/cart">
            <div className="cart-icon-container">
              <CartIcon color="black" />
              {carrito && carrito.length > 0 && (
                <span className="badge">{carrito.length}</span>
              )}
            </div>
          </NavLink>
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
  );
};

export default Navbar;
