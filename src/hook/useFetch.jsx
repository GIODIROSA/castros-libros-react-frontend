import { useEffect} from "react";
import axios from "axios";

const useFetchLibros = (setProductos) => {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/productos?limits=50");
        const productosConNumeros = response.data.map(producto => ({
          ...producto,
          producto_precio: parseFloat(producto.producto_precio),
        }));

        setProductos(productosConNumeros);
      } catch (error) {
        console.error("Error al obtener la lista de productos:", error);
      }
    };

    fetchProducts();
  }, [setProductos]);
};

export default useFetchLibros;