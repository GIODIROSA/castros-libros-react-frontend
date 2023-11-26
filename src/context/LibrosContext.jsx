import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
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

  const agregarAlCarrito = (detalles) => {
    // Verificación para saber si el producto ya está en el carrito
    const productoExistente = carrito.find(item => item.producto_id === detalles.producto_id);
    if (productoExistente) { // Si el producto ya existe en el carrito
      incrementarProducto(productoExistente); // incrementar la cantidad 
    } else { // Si el producto no existe en el carrito
      setCarrito(prevCarrito => [...prevCarrito, { ...detalles, cantidad: 1 }]); // agregar el producto al carrito
    }
    // Obtener la cantidad del producto después de agregarlo al carrito
    const cantidadProducto = carrito.find(item => item.producto_id === detalles.producto_id)?.cantidad || 1;
    Swal.fire({
      icon: 'success',
      title: '¡Producto agregado!',
      text: `
      Haz agregado el libro "${detalles.producto_nombre}" a tu carrito de compras`
    });

    console.log(carrito);
    console.log(detalles);
    console.log(cantidadProducto);
  };

  const totalCarrito = carrito.reduce((acc, item) => acc + item.producto_precio * item.cantidad, 0);//calcula el total del carrito

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
