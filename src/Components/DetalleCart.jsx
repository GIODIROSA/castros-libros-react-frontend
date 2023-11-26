import "../assets/style/detalleCart.css";
import { LibrosContext } from "../context/LibrosContext";
import { useContext } from "react";

const DetalleCart = () => {
  const { valoresContextoLibros } = useContext(LibrosContext);
  const { carrito, incrementarProducto, decrementarProducto, totalCarrito } = valoresContextoLibros;

 
  const carritoFiltrado = carrito.filter((item) => item.cantidad > 0); // Filtra el carrito para excluir productos con cantidad cero

  return (
    <>
      <div className="detalle-cart__container-titulo">
        <h3>Carro de Compras</h3>
      </div>

      <div className="cart-detail_container">
        <div className="cart-detail">
          <div className="left-container">
            {carritoFiltrado.map((item) => (
              <div key={item.producto_id}>
                <p>{item.producto_nombre}</p>
                <button onClick={() => decrementarProducto(item)}>-</button>
                <span>{item.cantidad}</span>
                <button onClick={() => incrementarProducto(item)}>+</button>
              </div>
            ))}
          </div>
          <div className="right-container">
            <h4>Detalle de Compra</h4>
            {carritoFiltrado.map((item) => (
              <div key={item.producto_id}>
                <p>{item.producto_nombre}</p>
                <p>${item.producto_precio * item.cantidad}</p>
              </div>
            ))}
            <div>
              <p>Total: ${totalCarrito}</p>
            </div>
            <div className="detalle-cart_container_button-pagar">
              <button className="detalle-cart_button-pagar">Pagar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetalleCart;