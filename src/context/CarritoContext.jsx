import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

// createContext() crea un contexto que se puede usar en cualquier componente de la aplicación
export const CarritoContext = createContext();

//CarritoProvider es un componente que se encarga de proveer el contexto a todos los componentes hijos
export const CarritoProvider = ({ children }) => {
    //Aquí se definen los estados que se quieran compartir con los componentes hijos
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);

  //Aquí se obtienen los datos de la API y se actualiza el estado "productos"
  useEffect(() => {
    const fetchProducts = async () => { 
      try {
        const response = await axios.get("http://localhost:3001/productos");
        setProductos(response.data); //actualiza el estado "productos" con la lista de productos que viene en la respuesta de la API
      } catch (error) {
        console.error("Error al obtener la lista de productos:", error);
      }
    };

    fetchProducts(); 
  }, []);

  const agregarAlCarrito = (producto) => { //producto: objeto con los datos del producto que vienen desde la API
    const encontrarProducto = carrito.find((item) => item.producto_id === producto.producto_id); //busca si el producto ya está en el carrito
    
    //se crea un objeto con los datos del producto y se agrega la propiedad "cantidad"
    const productoConCantidad = {
      ...producto,
      cantidad: 1,
    };

    if (encontrarProducto) { //si el producto ya está en el carrito
        setCarrito(
            carrito.map((item) =>
            item.producto_id === producto.producto_id
                ? { ...item, cantidad: item.cantidad + 1 } //actualiza la cantidad del producto
                : item
            )
        );
        } else {
            setCarrito([...carrito, productoConCantidad]); //agrega el producto al carrito
        }

  };

  const incrementarProducto = (producto) => {
    const encontrarProducto = carrito.find((item) => item.producto_id === producto.producto_id); //busca si el producto ya está en el carrito
          encontrarProducto.cantidad++; //incrementa la cantidad del producto
          setCarrito(
            carrito.map((item) =>
            item.producto_id === producto.producto_id
            ? { ...item, cantidad: item.cantidad } //actualiza la cantidad del producto
            : item
            )
        );
    };

    const decrementarProducto = (producto) => {
        const encontrarProducto = carrito.find((item) => item.producto_id === producto.producto_id); //busca si el producto ya está en el carrito
        if(encontrarProducto.cantidad > 0){ //el producto sólo se decrementa si la cantidad es mayor a 0
            encontrarProducto.cantidad--; //decrementa la cantidad del producto
           setCarrito([...carrito]); //actualiza el estado "carrito"
    }
}

const totalCarrito = carrito.reduce((acc, item) => acc + item.producto_precio * item.cantidad, 0); //calcula el total del carrito
//reduce() recorre el arreglo "carrito" y va sumando el precio de cada producto multiplicado por la cantidad

  const valoresContextoCarrito = {
    carrito,
    agregarAlCarrito,
    incrementarProducto,
    decrementarProducto,
    totalCarrito,
    productos, 
  };

  return (
    <CarritoContext.Provider value={valoresContextoCarrito}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  return useContext(CarritoContext);
};