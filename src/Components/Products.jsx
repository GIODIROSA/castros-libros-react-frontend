import { useState, useEffect, useContext } from "react";
import axios from "axios";
import CartIcon from "../assets/icons/cartIcon";
import { useNavigate } from "react-router-dom";
import { LibrosContext } from "../context/LibrosContext";
import "../assets/style/products.css";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const { valoresContextoLibros } = useContext(LibrosContext);
  const { setLibroSeleccionado, setProductoSeleccionado, productoSeleccionado, setCarrito, carrito } = valoresContextoLibros;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/productos?limits=20");
        const productosConNumeros = response.data.map(producto => ({
          ...producto,
          producto_precio: parseFloat(producto.producto_precio),
        }));

        setProducts(productosConNumeros);
      } catch (error) {
        console.error("Error al obtener la lista de productos:", error);
      }
    };

    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleLike = (productId) => {
    console.log(`Me gusta el producto con ID ${productId}`);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const verDetalles = (detalles) => {
    setLibroSeleccionado(detalles);
    navigate(`/productos/${detalles.producto_id}`);
  };

  const agregarAlCarrito = (detalles) => {
    setProductoSeleccionado(detalles);
    setCarrito([...carrito, { ...productoSeleccionado}]);
    console.log(productoSeleccionado);
    console.log(carrito);
  };

  return (
    <div className="castros_products__contenedor">
      <h1 className="castros_products__titulo">Productos</h1>
      <div className="castros_products__contenedor_cards">
        {currentProducts.map(
          ({
            producto_id,
            producto_imagen,
            producto_nombre,
            producto_descripcion,
            producto_autores,
            producto_precio,
          }) => (
            <div className="castros_products__card" key={producto_id}>
              <div
                onClick={() =>
                  verDetalles({
                    producto_id,
                    producto_imagen,
                    producto_nombre,
                    producto_descripcion,
                    producto_autores,
                    producto_precio,
                  })
                }
                style={{ cursor: "pointer" }}
              >
                <img className="castros_products__imagen"
                  src={`http://localhost:3001/${producto_imagen}`}
                  alt={producto_nombre}
                />
                <h3>{producto_nombre}</h3>
              </div>
              <p>{producto_descripcion}</p>
              <p>Autores: {producto_autores}</p>
              <p>Precio: {producto_precio}</p>
              <button className="castros_products__boton_like" onClick={() => handleLike(producto_id)}>
                <span>♡</span>
              </button>
              <button className="castros_products__boton_carrito" onClick={() => agregarAlCarrito({
                producto_id,
                producto_imagen,
                producto_nombre,
                producto_descripcion,
                producto_autores,
                producto_precio,
              })}>
                <CartIcon />
              </button>
            </div>
          )
        )}
      </div>
      <div className="castros_products__contenedor_paginacion">
        <button className="castros_products__boton_flecha"
          onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
        >
          {"<"}
        </button>
        {pageNumbers.map((number) => (
          <button 
            key={number}
            onClick={() => paginate(number)}
            className={currentPage === number ? "castros_products__boton_paginacion_actual" : "castros_products__boton_paginacion"}
          >
            {number}
          </button>
        ))}
        <button className="castros_products__boton_flecha"
          onClick={() =>
            setCurrentPage((prevPage) =>
              Math.min(
                prevPage + 1,
                Math.ceil(products.length / productsPerPage)
              )
            )
          }
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Products;