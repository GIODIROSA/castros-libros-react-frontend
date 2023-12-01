import { createContext, useContext, useState } from "react";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import useFetchLibros from "../hook/useFetch";
import { UsuarioContext } from "./UsuarioContext";

export const LibrosContext = createContext();

export const LibrosProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [libroSeleccionado, setLibroSeleccionado] = useState("");
  const [productoSeleccionado, setProductoSeleccionado] = useState("");
  const [carrito, setCarrito] = useState([]);
  const { valoresContextoUsuario } = useContext(UsuarioContext);
  const { usuarioGlobal } = valoresContextoUsuario;

  const incrementarProducto = (producto) => {
    setCarrito(
      carrito.map((item) =>
        item.producto_id === producto.producto_id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    );
    console.log(carrito);
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

  const agregarAlCarrito = (detalles) => {
    if (!usuarioGlobal) {
      Swal.fire({
        icon: 'error',
        title: 'Atención',
        text: 'Debes iniciar sesión para poder agregar libros a tu carrito'
      });
      return;
    }
    if (detalles.producto_stock < 1) {
      Swal.fire({
        icon: 'error',
        title: '¡Producto sin stock!',
        text: `El libro "${detalles.producto_nombre}" no se encuentra disponible en este momento`
      });
      return;
    }

    const productoExistente = carrito.find(item => item.producto_id === detalles.producto_id);

    if (productoExistente) {
      incrementarProducto(productoExistente);
    } else {
      setCarrito(prevCarrito => [...prevCarrito, { ...detalles, cantidad: 1 }]);
    }

    Swal.fire({
      icon: 'success',
      title: '¡Producto agregado!',
      text: `Haz agregado el libro "${detalles.producto_nombre}" a tu carrito de compras`
    });
    console.log(carrito);
  };

  const totalCarrito = carrito.reduce((acc, item) => acc + item.producto_precio * item.cantidad, 0);

  useFetchLibros(setProductos);

  const valoresContextoLibros = {
    productos,
    libroSeleccionado,
    setLibroSeleccionado,
    productoSeleccionado,
    setProductoSeleccionado,
    totalCarrito,
    agregarAlCarrito,
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