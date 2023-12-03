import { createContext, useState } from "react";

export const UsuarioContext = createContext();

// eslint-disable-next-line react/prop-types
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
