import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const LibrosContext = createContext();

export const LibrosProvider = ({ children }) => {
  const [productos, setProductos] = useState("");
  const [libroSeleccionado, setLibroSeleccionado] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/productos");
        setProductos(response.data);
      } catch (error) {
        console.error("Error al obtener la lista de productos:", error);
      }
    };

    fetchProducts();
  }, []);

  const valoresContextoLibros = {
    productos,
    libroSeleccionado,
    setLibroSeleccionado,
  };

  console.log("productos", productos);

  return (
    <LibrosContext.Provider value={{ valoresContextoLibros }}>
      {children}
    </LibrosContext.Provider>
  );
};
