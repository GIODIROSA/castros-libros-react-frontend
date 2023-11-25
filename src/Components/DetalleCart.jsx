import { useState } from "react";
import "../assets/style/detalleCart.css";

const DetalleCart = () => {


  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 10, quantity: 1 },
    { id: 2, name: "Product 2", price: 15, quantity: 2 },
    // ... otros productos
  ]);

  const increaseQuantity = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setProducts(updatedProducts);
  };

  const decreaseQuantity = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId && product.quantity > 0
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setProducts(updatedProducts);
  };

  const subtotal = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const total = subtotal; // Puedes añadir impuestos, gastos de envío, etc.

  return (
    <>
      <div className="detalle-cart__container-titulo">
        {" "}
        <h3>Carro de Compras</h3>
      </div>

      <div className="cart-detail_container">
        <div className="cart-detail">
          {" "}
          <div className="left-container">
            {products.map((product) => (
              <div key={product.id}>
                <p>{product.name}</p>
                <button onClick={() => decreaseQuantity(product.id)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => increaseQuantity(product.id)}>+</button>
              </div>
            ))}
          </div>
          <div className="right-container">
            <h4>Detalle de Compra</h4>
            {products.map((product) => (
              <div key={product.id}>
                <p>{product.name}</p>
                <p>${product.price * product.quantity}</p>
              </div>
            ))}
            <div>
              <p>Subtotal: ${subtotal}</p>
              <p>Total: ${total}</p>
            </div>{" "}
            <div className="detalle-cart_container_button-pagar">
              {" "}
              <button className="detalle-cart_button-pagar">Pagar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetalleCart;
