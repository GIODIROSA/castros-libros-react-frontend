import { useState, useContext } from "react";
import CartIcon from "../assets/icons/cartIcon";
import { useNavigate } from "react-router-dom";
import { LibrosContext } from "../context/LibrosContext";
import "../assets/style/products.css";

const Products = () => {
  const navigate = useNavigate();
  const { valoresContextoLibros } = useContext(LibrosContext);
  const { setLibroSeleccionado, agregarAlCarrito, productos } = valoresContextoLibros;

  // Estado para la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Inicio paginación
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productos.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(productos.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  // Fin paginación

  const verDetalles = (detalles) => {
    setLibroSeleccionado(detalles);
    navigate(`/productos/${detalles.producto_id}`);
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
            producto_stock,
          }) => (
            <div className="castros_products__card" key={producto_id}>
              <div
                onClick={() => verDetalles({
                  producto_id,
                  producto_imagen,
                  producto_nombre,
                  producto_descripcion,
                  producto_autores,
                  producto_precio,
                })}
                style={{ cursor: "pointer" }}
              >
                <img
                  className="castros_products__imagen"
                  src={`http://localhost:3001/${producto_imagen}`}
                  alt={producto_nombre}
                />
                <h3>{producto_nombre}</h3>
              </div>
              <p>Autores: {producto_autores}</p>
              <p>Precio: ${producto_precio}</p>
              <p>Clickea el libro para ver más detalles...</p>
              <button
                className="castros_products__boton_carrito"
                onClick={() => agregarAlCarrito({
                  producto_id,
                  producto_imagen,
                  producto_nombre,
                  producto_descripcion,
                  producto_autores,
                  producto_precio,
                  producto_stock,
                })}
              >
                <CartIcon/>
              </button>
            </div>
          )
        )}
      </div>
      <div className="castros_products__contenedor_paginacion">
        <button
          className="castros_products__boton_flecha"
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
        <button
          className="castros_products__boton_flecha"
          onClick={() =>
            setCurrentPage((prevPage) =>
              Math.min(
                prevPage + 1,
                Math.ceil(productos.length / productsPerPage)
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