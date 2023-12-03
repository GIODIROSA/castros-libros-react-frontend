import { useContext } from "react";
import DetalleCart from "../Components/DetalleCart";
import Warning from "../Components/Warning";
import { UsuarioContext } from "../context/UsuarioContext";

const Cart = () => {
  const { valoresContextoUsuario } = useContext(UsuarioContext);
  const { usuarioGlobal } = valoresContextoUsuario;
  return (
    <div>{usuarioGlobal ? <DetalleCart /> : <Warning rol="miembro" />}</div>
  );
};

export default Cart;
