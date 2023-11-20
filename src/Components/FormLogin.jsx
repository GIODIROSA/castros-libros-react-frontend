import { useState } from "react";
import "../assets/style/formLogin.css";
import axios from "axios";

const FormLogin = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [usuario, setUsuario] = useState({});

  const registrarUsuario = async () => {
    const urlServer = "http://localhost:3001";
    const endpoint = "/usuarios";

    try {
      await axios.post(urlServer + endpoint, usuario);
      alert("Usuario registrado con éxito");
    } catch (error) {
      alert("Algo salió mal ...");
      console.log(error);
    }
  };

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuario({ ...usuario, ...field });
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container-login">
      <div className="tabs-login">
        <button
          className={activeTab === "login" ? "active" : ""}
          onClick={() => handleTabChange("login")}
        >
          Ingresar
        </button>
        <button
          className={activeTab === "register" ? "active" : ""}
          onClick={() => handleTabChange("register")}
        >
          Registrarse
        </button>
      </div>
      <div className="login-container">
        {activeTab === "login" && (
          <form className="login-form">
            <label>Email</label>
            <input type="email" placeholder="Ingresa tu email" />
            <label>Contraseña</label>
            <input type="password" placeholder="Contraseña" />
            <button className="login-button_action">INGRESAR</button>
          </form>
        )}
        {activeTab === "register" && (
          <form className="register-form">
            <label>Nombre</label>
            <input
              type="nombre"
              name="nombre"
              placeholder="Ingresa tu Nombre"
              value={usuario.nombre || ""}
              onChange={handleSetUsuario}
            />
            <label>Apellido</label>
            <input
              type="apellido"
              name="apellido"
              placeholder="Ingresa tu Apellido"
              value={usuario.apellido || ""}
              onChange={handleSetUsuario}
            />
            <label>Dirección</label>
            <input
              type="direccion"
              name="direccion"
              placeholder="Ingresa tu Dirección"
              value={usuario.direccion || ""}
              onChange={handleSetUsuario}
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Ingresa tu Email"
              value={usuario.email || ""}
              onChange={handleSetUsuario}
            />
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={usuario.password || ""}
              onChange={handleSetUsuario}
            />
            <button className="login-button_action" onClick={registrarUsuario}>
              REGISTRARSE
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FormLogin;
