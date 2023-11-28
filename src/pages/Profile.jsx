import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import "../assets/style/profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { valoresContextoUsuario } = useContext(UsuarioContext);
  const { usuarioGlobal } = valoresContextoUsuario;

  const handleButton = () => {
    navigate("/");
  };
  return (
    <div className="profile-contenedor">
      <h1>
        Bienvenido/a <br /> {usuarioGlobal?.nombre} {usuarioGlobal?.apellido}
      </h1>
      <p>¡Gracias por visitarnos!</p>
      <button className="button-profile" onClick={handleButton}>
        Seguir Comprando
      </button>
    </div>
  );
};

export default Profile;
