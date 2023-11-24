import { createContext, useState } from "react";

export const UsuarioContext = createContext();

export const LibrosProvider = ({ children }) => {
  const [usuarioRegistrado, setUsuarioRegistrado] = useState("");

  const valoresContextoUsuario = {
    usuarioRegistrado,
    setUsuarioRegistrado,
  };

  return (
    <UsuarioContext.Provider value={{ valoresContextoUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
};
