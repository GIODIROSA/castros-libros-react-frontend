import { useContext, useState } from "react";
import "../assets/style/managerGallery.css";
import { LibrosContext } from "../context/LibrosContext";
import { deleteIcon } from "../assets/icons/deleteIcon";
import editIcon from "../assets/icons/editIcon";
import "../assets/style/modal.css";

const ManagerGallery = () => {
  const { valoresContextoLibros } = useContext(LibrosContext);
  const { productos, eliminarProducto, handleUpdateProduct } = valoresContextoLibros;
  const [libroSeleccionadoLocal, setLibroSeleccionadoLocal] = useState();
  const deleteIconSvg = deleteIcon();
  const editIconSvg = editIcon();

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="manager-gallery">
      {productos.map((item) => (
        <div className="card" key={item.producto_id}>
          <img
            src={`http://localhost:3001/${item.producto_imagen}`}
            alt={item.title}
          />
          <div className="card-info">
            <h4>{item.producto_nombre}</h4>
            <p>${item.producto_precio}</p>
            <div className="icon-container">
              <button onClick={() => eliminarProducto(item.producto_id)}>
                {deleteIconSvg}
              </button>
              <button
                onClick={() => {
                  setLibroSeleccionadoLocal(item); // Guardar el libro seleccionado para la edición
                  handleShow(); // Mostrar el modal
                }}
              >
                {editIconSvg}
              </button>
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
                    src={`http://localhost:3001/${libroSeleccionadoLocal.producto_imagen}`}
                    className="img-fluid"
                    alt="Imagen"
                  />
                </div>
                <div className="inputs_container">
                  {" "}
                  <div>
                    <label>Título</label>
                    <input
                      type="text"
                      placeholder="Título del producto"
                      value={libroSeleccionadoLocal.producto_nombre}
                      onChange={(e) =>
                        setLibroSeleccionadoLocal({
                          ...libroSeleccionadoLocal,
                          producto_nombre: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label>Precio</label>
                    <input
                      type="text"
                      placeholder="Precio"
                      value={libroSeleccionadoLocal.producto_precio}
                      onChange={(e) =>
                        setLibroSeleccionadoLocal({
                          ...libroSeleccionadoLocal,
                          producto_precio: Number(e.target.value),
                        })
                      }
                    />
                  </div>
                  <div className="buttons_container">
                    {" "}
                    <button className="button_cancelar" onClick={handleClose}>
                      Cancelar
                    </button>
                    <button
                      className="button_editar"
                      onClick={() => {
                        handleUpdateProduct(
                          libroSeleccionadoLocal.producto_id,
                          libroSeleccionadoLocal.producto_nombre,
                          libroSeleccionadoLocal.producto_precio
                        );
                        handleClose(); // Cerrar el modal después de la actualización
                      }}
                    >
                      Guardar
                    </button>
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
