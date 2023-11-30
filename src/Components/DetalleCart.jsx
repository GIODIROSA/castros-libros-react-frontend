import axios from "axios";
import "../assets/style/detalleCart.css";
import { LibrosContext } from "../context/LibrosContext";
import { useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const DetalleCart = () => {
  const { valoresContextoLibros } = useContext(LibrosContext);
  const { carrito, incrementarProducto, decrementarProducto, totalCarrito } = valoresContextoLibros;

  const navigate = useNavigate();


  const enviarPedidoAlServidor = async () => {
    try {
      // Filtra el carrito para excluir productos con cantidad cero
      const carritoFiltrado = carrito.filter((item) => item.cantidad > 0);
  
      // construcción del objeto de pedido con la estructura que espera el servidor
      const pedido = {
        pedido_fecha: new Date().toISOString(),
        usuario_id: 2,
        pedido_estado: false,
        detalle_pedido: carritoFiltrado.map(item => ({
          detalle_cantidad: item.cantidad,
          detalle_precio: item.producto_precio, 
          producto_id: item.producto_id,
        })),
      };
            
      // Pregunta al usuario si está seguro de realizar el pago
      const confirmacionPago = await Swal.fire({
        icon: 'question',
        title: 'Confirmar pago',
        text: '¿Estás seguro de realizar el pago?',
        showCancelButton: true,
        confirmButtonText: 'Sí, realizar pago',
        cancelButtonText: 'Cancelar',
      });
  
      // Si el usuario confirma, realiza la petición al servidor
      if (confirmacionPago.isConfirmed) {
        await axios.post('http://localhost:3001/crear_pedido', pedido);
  
        // Muestra un modal de éxito si la petición fue exitosa
        Swal.fire({
          icon: 'success',
          title: 'Pedido creado',
          text: 'El pedido se creó correctamente',
        });
  
        // Redirige al usuario a la página de inicio
        navigate('/');
      }
    } catch (error) {
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
