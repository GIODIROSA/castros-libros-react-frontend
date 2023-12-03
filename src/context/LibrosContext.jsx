import { createContext, useContext, useState} from "react";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import useFetchLibros from "../hook/useFetch";
import { UsuarioContext } from "./UsuarioContext";
import axios from "axios";

export const LibrosContext = createContext();

// eslint-disable-next-line react/prop-types
export const LibrosProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [libroSeleccionado, setLibroSeleccionado] = useState("");
  const [productoSeleccionado, setProductoSeleccionado] = useState("");
  const [carrito, setCarrito] = useState([]);
  const { valoresContextoUsuario } = useContext(UsuarioContext);
  const { usuarioGlobal } = valoresContextoUsuario;
  //estados para el formulario de agregar libro desde el admin
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState(null);
  const [stock, setStock] = useState("");
  const [categoria, setCategoria] = useState("");
  const [estado, setEstado] = useState("");

  const agregarLibro = async (e) => {
    e.preventDefault();
  
    //libroData objeto con los detalles del libro
    const libroData = {
      producto_nombre: titulo,
      producto_descripcion: descripcion,
      producto_precio: precio,
      producto_categoria: categoria,
      producto_autores: autor,
      producto_stock: stock,
      producto_estado: estado,
    };
  
    // se crea objeto tipo FormData y se le adjunta el JSON del producto
    const formData = new FormData();
    formData.append("data", JSON.stringify(libroData)); // *******UN ÚNICO JSON CON TODOS LOS DATOS DEL PRODUCTO******
    formData.append("imagenProducto", imagen); // luego se adjunta la imagen al FormData

    console.log("formData", formData);
  
    try {
      const response = await axios.post("http://localhost:3001/admin", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      console.log("response", response.data);
  
      Swal.fire({
        icon: 'success',
        title: '¡Libro agregado!',
        text: `El libro "${titulo}" se agregó correctamente`
      });
  
      // limpiamos el formulario
      setTitulo("");
      setAutor("");
      setPrecio("");
      setDescripcion("");
      setImagen(null);
      setStock("");
      setCategoria("");
      setEstado("");
  
    } catch (error) {
      console.error("Error al agregar el libro:", error);
    }
  };


  const getProductos = async () => {
    try {
      const response = await axios.get("http://localhost:3001/productos?limits=20");
      setProductos(response.data);
    } catch (err) {
      console.log(err);
    }
  };

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

  const vaciarCarrito = () => {
    setCarrito([]);
  };

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
    getProductos,
    vaciarCarrito,
    agregarLibro,
    setTitulo,
    setAutor,
    setPrecio,
    setDescripcion,
    setImagen,
    setStock,
    setCategoria,
    setEstado
    };

  return (
    <LibrosContext.Provider value={{ valoresContextoLibros }}>
      {children}
    </LibrosContext.Provider>
  );
};