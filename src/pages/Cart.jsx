import React, { useState } from 'react';
import ".././assets/style/bookDetails.css"

const BookDetail = () => {
  const [quantity, setQuantity] = useState(1);

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
        <img src="../../public/img/09elCodigoDaVinci.jpg" alt="titulo genérico" />
      </div>
      <div className="book-info">
        <h2 className="book-title">Título genérico</h2>
        <p className="book-price">Price: $999999</p>
        <p className="book-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ratione vero doloremque quo id temporibus, optio in vel quia modi? Impedit, eaque optio suscipit eveniet animi deserunt quia nihil nostrum!</p>
        <div className="quantity-container">
          <div className="quantity-buttons">
            <button className="quantity-button" onClick={handleDecrement}>-</button>
            <span className="quantity">{quantity}</span>
            <button className="quantity-button" onClick={handleIncrement}>+</button>
          </div>
          <button className="add-to-cart">Agragar al carrito</button>
        </div>
        <button className="add-to-favorites">Agregar a Favoritos</button>
      </div>
    </div></div>
    
  );
};

export default BookDetail;
