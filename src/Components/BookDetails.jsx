import { useContext, useEffect, useState } from "react";
import ".././assets/style/bookDetails.css";
import { ButtonAlCarrito } from "../assets/style/styledComponents/buttonAlCarrito";
import { LibrosContext } from "../context/LibrosContext";

const BookDetail = () => {
  const { valoresContextoLibros } = useContext(LibrosContext);
  const [quantity, setQuantity] = useState(1);
  const { libroSeleccionado } = valoresContextoLibros;

const {producto_nombre, producto_precio, producto_descripcion, producto_imagen} = libroSeleccionado; 

// función para quitar un / del la ruta (posiblemente se elimine)
function corregirRuta(ruta) {
  return ruta.replace(/\/\//g, '/');
}

const rutaCorregida = corregirRuta(producto_imagen);

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
            src={rutaCorregida}
            alt={producto_nombre}
          />
        </div>
        <div className="book-info">
          <h2 className="book-title">{producto_nombre}</h2>
          <p className="book-price">Precio: ${producto_precio}</p>
          <p className="book-description">
           {producto_descripcion}
          </p>
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
            <ButtonAlCarrito className="libreria-castro__boton-agregar-carrito">
              Agregar al carrito
            </ButtonAlCarrito>
          </div>
          <button className="add-to-favorites">Agregar a Favoritos</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail; 
