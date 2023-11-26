import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const LibrosContext = createContext();

export const LibrosProvider = ({ children }) => {
  const [productos, setProductos] = useState("");
  const [libroSeleccionado, setLibroSeleccionado] = useState("");
  const [productoSeleccionado, setProductoSeleccionado] = useState("");
  const [carrito, setCarrito] = useState([]);

  const incrementarProducto = (producto) => {
    setCarrito(
      carrito.map((item) =>
        item.producto_id === producto.producto_id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    );
  };

  const decrementarProducto = (producto) => {
    setCarrito(
      carrito.map((item) =>
        item.producto_id === producto.producto_id
          ? { ...item, cantidad: Math.max(0, item.cantidad - 1) }
          : item
      )
    );
  };

 

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
    productoSeleccionado,
    setProductoSeleccionado,
    carrito,
    setCarrito,
    incrementarProducto,
    decrementarProducto,
    };

  return (
    <LibrosContext.Provider value={{ valoresContextoLibros }}>
      {children}
    </LibrosContext.Provider>
  );
};
