import { useContext } from "react";
import ManagerForm from "../Components/ManagerForm";
import { UsuarioContext } from "../context/UsuarioContext";
import Warning from "../Components/Warning";

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
        <Warning rol="administrador"/>
      )}
    </div>
  );
};

export default BookManager;
