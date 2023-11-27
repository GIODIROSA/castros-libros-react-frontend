import axios from "axios";
import "../assets/style/detalleCart.css";
import { LibrosContext } from "../context/LibrosContext";
import { useContext } from "react";

const DetalleCart = () => {
  const { valoresContextoLibros } = useContext(LibrosContext);
  const { carrito, incrementarProducto, decrementarProducto, totalCarrito } = valoresContextoLibros;

 const enviarPedidoAlServidor = async () => {
    try {
       // construccion del objeto de pedido con la estructura que espera el servidor
       const pedido = {
         pedido_fecha: new Date().toISOString(),
         usuario_id: 2,
         pedido_estado: true,
         detalle_pedido: carritoFiltrado.map(item => ({
           detalle_cantidad: item.cantidad,
           detalle_precio_producto: item.producto_precio,
           producto_id: item.producto_id,
         })),
       };

     console.log(pedido);

     // petición POST al servidor
     const response = await axios.post('http://localhost:3001/crear_detalle_pedido', {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pedido),
      });

      if (response.ok) { // si la petición fue exitosa
         console.log('Pedido enviado correctamente.'); // muestra un mensaje de exito en la consola
       } else { // si la petición falla, muestra un mensaje de error en la consola
        console.error('Error al enviar el pedido al servidor.');
       }
     } catch (error) { // si la petición falla, muestra un mensaje de error en la consola
       console.error('Error en la solicitud:', error);
     }
   };

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
                onClick={enviarPedidoAlServidor} 
               className="detalle-cart_button-pagar">Pagar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetalleCart;