import "../assets/style/detalleCart.css";
import { LibrosContext } from "../context/LibrosContext";
import { useContext } from "react";

const DetalleCart = () => {
  const { valoresContextoLibros } = useContext(LibrosContext);
  const { carrito, incrementarProducto, decrementarProducto, totalCarrito } = valoresContextoLibros;

  // const [carritoData, setCarritoData] = useState([inicial]);

  // const inicial = {
  // {
  //   "pedido_fecha": "2023-11-22T12:00:00Z", 
  //   "usuario_id": 2, 
  //   "pedido_estado": 1, 
  //   "detalle_pedido": [
  //     {
  //       "detalle_cantidad": 3, 
  //       "detalle_precio": 12000, 
  //       "producto_id": 2 
  //     },
  //     {
  //       "detalle_cantidad": 2,
  //       "detalle_precio": 12000,
  //       "producto_id": 3 
  //     }
  //   ]
  // }

  //  const handlePagar = setCarritoData({}) incluir petición post;

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
              <button
                //onClick={handlePagar} 
                className="detalle-cart_button-pagar">Pagar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetalleCart;