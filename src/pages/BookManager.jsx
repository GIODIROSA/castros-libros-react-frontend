import { useContext } from "react";
import ManagerForm from "../Components/ManagerForm";
import "../assets/style/bookManager.css";
import { UsuarioContext } from "../context/UsuarioContext";

const BookManager = () => {
  const { valoresContextoUsuario } = useContext(UsuarioContext);
  const { usuarioGlobal } = valoresContextoUsuario;
  return (
    <div>
      {usuarioGlobal && usuarioGlobal.rol === "admin" ? (
        <div>
          <ManagerForm />
        </div>
      ) : (
        <>
          {" "}
          <div>
            <ManagerForm />
          </div>
          <div className="warning">
            <p>Debes ser administrador para ver esta sección.</p>
          </div>
        </>
      )}
    </div>
  );
};

export default BookManager;
