
import { useContext } from "react";
import "../assets/style/managerGallery.css"
import { LibrosContext } from "../context/LibrosContext";

const ManagerGallery = () => {
    const { valoresContextoLibros } = useContext(LibrosContext);
  const { productos } = valoresContextoLibros;

    

  return (
    <div className="manager-gallery">
      {productos.map((item) => (
        <div className="card" key={item.id}>
          <img   src={`http://localhost:3001/${item.producto_imagen}`} alt={item.title} />
          <div className="card-info">
            <h4>{item.producto_nombre}</h4>
            <p>{item.producto_precio}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManagerGallery;