import { createContext, useState } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
  const [usuarioGlobal, setUsuarioGlobal] = useState("");

  const valoresContextoUsuario = {
    usuarioGlobal,
    setUsuarioGlobal,
  };

  return (
    <UsuarioContext.Provider value={{ valoresContextoUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
};
