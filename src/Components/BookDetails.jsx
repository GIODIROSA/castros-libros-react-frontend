import { useContext, useEffect, useState } from "react";
import ".././assets/style/bookDetails.css";
import { LibrosContext } from "../context/LibrosContext";
import { useNavigate } from "react-router-dom";
import { UsuarioContext } from "../context/UsuarioContext";

const BookDetail = () => {
  const { valoresContextoLibros } = useContext(LibrosContext);
  const [quantity] = useState(1);
  const { libroSeleccionado, agregarAlCarrito } = valoresContextoLibros;
  const navigate = useNavigate();
  const { valoresContextoUsuario } = useContext(UsuarioContext);
  const { usuarioGlobal } = valoresContextoUsuario;

  const {
    producto_nombre,
    producto_precio,
    producto_descripcion,
    producto_imagen,
    producto_autores,
    producto_id,
    producto_stock,
  } = libroSeleccionado;

  useEffect(() => {
    if (!libroSeleccionado) {
      navigate("/");
    }
  }, [libroSeleccionado]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="book-detail_container">
      <div className="book-detail">
        <div className="book-image">
          <img
            src={`http://localhost:3001/${producto_imagen}`}
            alt={producto_nombre}
          />
        </div>
        <div className="book-info">
          <h2 className="book-title">{producto_nombre}</h2>
          <p>
            {" "}
            <b>Autor:</b> {producto_autores}{" "}
          </p>
          <p className="book-price">Precio: ${producto_precio}</p>
          <p className="book-description">{producto_descripcion}</p>
          <div className="quantity-container">
            <button
              onClick={() =>
                agregarAlCarrito({
                  producto_id,
                  producto_imagen,
                  producto_nombre,
                  producto_descripcion,
                  producto_autores,
                  producto_precio,
                  producto_stock,
                }, quantity)
              }
              className={
                usuarioGlobal
                  ? "libreria-castro__boton-agregar-carrito"
                  : "libreria-castro__boton-agregar-carrito-disabled"
              }
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;