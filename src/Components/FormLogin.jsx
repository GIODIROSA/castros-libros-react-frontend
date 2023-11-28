import { useContext, useState } from "react";
import "../assets/style/formLogin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UsuarioContext } from "../context/UsuarioContext";

const FormLogin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    email: "",
    password: "",
  });
  const { valoresContextoUsuario } = useContext(UsuarioContext);
  const { setUsuarioGlobal } = valoresContextoUsuario;

  //función que llama a la API del login
  const handleLogin = async (email, password) => {
    try {
      const token = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });
      console.log("Respuesta del servidor:", token.data);
      alert("Inicio de sesión exitoso");
      localStorage.setItem("token", token.data);
      setUsuario({
        nombre: "",
        apellido: "",
        direccion: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }

    const getUsuarioData = async () => {
      const urlServer = "http://localhost:3001";
      const endpoint = "/usuarios";
      const token = localStorage.getItem("token");
      console.log(token);
      try {
        const { data } = await axios.get(urlServer + endpoint, {
          headers: { Authorization: "Bearer " + token },
        });
        console.log("la data", data);
        setUsuarioGlobal(data);
        navigate("/perfil");

        /*   setUsuario(data); */
      } catch ({ response: { data: message } }) {
        alert("Hubo un error en el incio de sesión. Revisa tus credenciales");
        console.log(message);
      }
    };

    getUsuarioData();
  };

  //función que llama a la API del registro
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (activeTab === "register") {
        const response = await axios.post(
          "http://localhost:3001/usuarios",
          usuario
        );
        console.log("Respuesta del servidor:", response.data);
        alert("Usuario registrado con éxito");
        setTimeout(() => {
          navigate("/");
        }, 500);
      }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = usuario;
    if ((email && password) || email != "" || password != "") {
      await handleLogin(email, password);
      setUsuario({
        nombre: "",
        apellido: "",
        direccion: "",
        email: "",
        password: "",
      });
    } else {
      alert("Email y contraseña son requeridos");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsuario({
      ...usuario,
      [name]: value,
    });
    console.log("usuario", usuario);
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
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Ingresa tu email"
              value={usuario.email}
              onChange={(e) =>
                setUsuario({ ...usuario, email: e.target.value })
              }
            />
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="Contraseña"
              value={usuario.password}
              onChange={(e) =>
                setUsuario({ ...usuario, password: e.target.value })
              }
            />
            <button type="submit" className="login-button_action">
              INGRESAR
            </button>
          </form>
        )}
        {activeTab === "register" && (
          <form className="register-form" onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="Ingresa tu Nombre"
              value={usuario.nombre}
              onChange={handleInputChange}
            />
            <label>Apellido</label>
            <input
              type="text"
              name="apellido"
              placeholder="Ingresa tu Apellido"
              value={usuario.apellido}
              onChange={handleInputChange}
            />
            <label>Dirección</label>
            <input
              type="text"
              name="direccion"
              placeholder="Ingresa tu Dirección"
              value={usuario.direccion}
              onChange={handleInputChange}
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Ingresa tu Email"
              value={usuario.email}
              onChange={handleInputChange}
            />
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={usuario.password}
              onChange={handleInputChange}
            />
            <button className="login-button_action">REGISTRARSE</button>
          </form>
        )}
      </div>{" "}
    </div>
  );
};

export default FormLogin;
