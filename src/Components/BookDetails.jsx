import { useContext, useEffect, useState } from "react";
import ".././assets/style/bookDetails.css";
import { LibrosContext } from "../context/LibrosContext";
import { useNavigate } from "react-router-dom";
import { UsuarioContext } from "../context/UsuarioContext";

const BookDetail = () => {
  const { valoresContextoLibros } = useContext(LibrosContext);
  const [quantity, setQuantity] = useState(1);
  const { libroSeleccionado } = valoresContextoLibros;
  const navigate = useNavigate();
  const { valoresContextoUsuario } = useContext(UsuarioContext);
  const { usuarioGlobal } = valoresContextoUsuario;

  const {
    producto_nombre,
    producto_precio,
    producto_descripcion,
    producto_imagen,
    producto_autores,
  } = libroSeleccionado;

  useEffect(() => {
    if (!libroSeleccionado) {
      navigate("/");
    }
  }, [libroSeleccionado]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

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
            <div className="quantity-buttons">
              <button className="quantity-button" onClick={handleDecrement}>
                -
              </button>
              <span className="quantity">{quantity}</span>
              <button className="quantity-button" onClick={handleIncrement}>
                +
              </button>
            </div>

            <button
              className={
                usuarioGlobal
                  ? "libreria-castro__boton-agregar-carrito"
                  : "libreria-castro__boton-agregar-carrito-disabled"
              }
            >
              Agregar al carrito
            </button>
          </div>
          {/* <button className="add-to-favorites">Agregar a Favoritos</button> */}
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
