import { useContext } from "react";
import "../assets/style/managerGallery.css";
import { LibrosContext } from "../context/LibrosContext";
import { deleteIcon } from "../assets/icons/deleteIcon";
import editIcon from "../assets/icons/editIcon";
import axios from "axios";

const ManagerGallery = () => {
  const { valoresContextoLibros } = useContext(LibrosContext);
  const { productos } = valoresContextoLibros;
  const deleteIconSvg = deleteIcon();
  const editIconSvg = editIcon();

/*   const eliminarProducto = (idProducto) => {

    axios.delete(`http://localhost:3001/admin/${idProducto}`)
      .then((response) => {
        console.log('Producto eliminado exitosamente:', response.data);
      })
      .catch((error) => {
        console.error('Error al eliminar el producto:', error);
      });
  }; */

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
              <button/*  onClick={() => eliminarProducto(item.producto_id)} */>{deleteIconSvg}</button>
              <button>{editIconSvg}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManagerGallery;
