import "../assets/style/detalleCart.css";
import { LibrosContext } from "../context/LibrosContext";
import { useContext } from "react";


const DetalleCart = () => {
  const { valoresContextoLibros } = useContext(LibrosContext);
  const { carrito, incrementarProducto, decrementarProducto, productoSeleccionado } = valoresContextoLibros;

  // const subtotal = products.reduce(
  //   (acc, product) => acc + product.price * product.quantity,
  //   0
  // );

  const totalCarrito = carrito.reduce((acc, item) => acc + item.producto_precio * item.cantidad, 0);//calcula el total del carrito

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
        {carrito.map((item) => (
          <div key={item.producto_id}>
            <p>{item.producto_nombre}</p>
            <button onClick={() => decrementarProducto(productoSeleccionado)}>-</button>
            <span>{item.cantidad}</span>
            <button onClick={() => incrementarProducto(productoSeleccionado)}>+</button>
          </div>
        ))}
      </div>
          <div className="right-container">
            <h4>Detalle de Compra</h4>
            {carrito.map((product) => (
              <div key={product.id}>
                <p>{product.name}</p>
                <p>${product.price * product.quantity}</p>
              </div>
            ))}
            <div>
              <p>Subtotal: 0</p>
              <p>Total: ${totalCarrito}</p>
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
