import { useContext, useEffect, useState } from "react";
import "../assets/style/managerGallery.css";
import { LibrosContext } from "../context/LibrosContext";
import { deleteIcon } from "../assets/icons/deleteIcon";
import editIcon from "../assets/icons/editIcon";
import axios from "axios";
import Swal from "sweetalert2";
import "../assets/style/modal.css";

const ManagerGallery = () => {
  const { valoresContextoLibros } = useContext(LibrosContext);
  const { productos, getProductos } = valoresContextoLibros;
  const deleteIconSvg = deleteIcon();
  const editIconSvg = editIcon();

  const eliminarProducto = async (idProducto) => {
    Swal.fire({
      title: "¿Esta seguro de eliminar este producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5d573f",
      cancelButtonColor: "#b3ae8df9",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(
            `http://localhost:3001/admin/${idProducto}`
          );
          console.log("Producto eliminado exitosamente:", response.data);
          await getProductos();
        } catch (error) {
          console.error("Error al eliminar el producto:", error);

          Swal.fire({
            icon: "error",
            title: "Atención",
            text: "No se puede eliminar este producto porque es parte de un pedido",
          });
          return;
        }
      }
    });
  };

  // Llamar a getProductos una vez al montar el componente para obtener los productos iniciales
  useEffect(() => {
    getProductos();
  }, []);

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="manager-gallery">
      {productos.map((item) => (
        <div className="card" key={item.id}>
          <img
            src={`http://localhost:3001/${item.producto_imagen}`}
            alt={item.title}
          />
          <div className="card-info">
            <h4>{item.producto_nombre}</h4>
            <p>${item.producto_precio}</p>
            <div className="icon-container">
              {/* Aquí puedes agregar tus íconos */}
              <button onClick={() => eliminarProducto(item.producto_id)}>
                {deleteIconSvg}
              </button>
              <button onClick={handleShow}>{editIconSvg}</button>
            </div>
          </div>
        </div>
      ))}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            <div className="modal-body">
              <div className="row">
                <div className="column">
                  <img
                    src="https://images.cdn1.buscalibre.com/fit-in/360x360/c6/78/c678ab2c90ed50d7d8849e30bc92b05a.jpg"
                    className="img-fluid"
                    alt="Imagen"
                  />
                </div>
                <div className="inputs_container">
                  {" "}
                  <div>
                    {" "}
                    <label>Título</label>
                    <input
                      type="text"
                      placeholder="Título del producto"
                      /* value={item.producto_nombre} */
                      /*  onChange={(e) => handleTitleChange(e, item.id)}  */ // Asegúrate de tener una función para manejar el cambio del título
                    />
                  </div>
                  <div>
                    <label>Precio</label>
                    <input
                      label
                      type="text"
                      placeholder="Precio"
                      /* value={item.producto_precio} */
                      /*    onChange={(e) => handlePriceChange(e, item.id)} */ // Asegúrate de tener una función para manejar el cambio del precio
                    />
                  </div>
                  <div className="buttons_container">
                    {" "}
                    <button className="button_cancelar">Cancelar</button>
                    <button className="button_editar">Guardar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagerGallery;
