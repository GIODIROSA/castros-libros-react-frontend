import "../assets/style/managerForm.css";
import { ButtonAlCarrito } from "../assets/style/styledComponents/buttonAlCarrito";
import ManagerGallery from "./ManagerGallery";
import { LibrosContext } from "../context/LibrosContext";
import { useContext} from "react";

const ManagerForm = () => {
  const { valoresContextoLibros } = useContext(LibrosContext);
  const {
    agregarLibro,
    setTitulo,
    setAutor,
    setPrecio,
    setDescripcion,
    setImagen,
    setStock,
    setCategoria,
    setEstado,
    getProductos
  } = valoresContextoLibros;

  const handleChange = (event, setterFunction) => {
    const valor =
      event.target.type === "file" ? event.target.files[0] : event.target.value;
    console.log(`${event.target.name}:`, valor);
    setterFunction(valor);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await agregarLibro(e);
    await getProductos();
  };


  return (
    <div className="book-form-container">
      <div className="manager_typography">
        <h4>Agregar Producto</h4>
      </div>
      {/* form */}
      <form onSubmit={handleSubmit}>
        <div className="inputs-container">
          <div className="manager-form_input-container">
            <label>Titulo</label>
            <input
              className="manager-form_inputs"
              type="text"
              name="producto_nombre"
              placeholder="Título"
              onChange={(event) => handleChange(event, setTitulo)}
              required
            />
          </div>
          <div className="manager-form_input-container">
            <label>Autor</label>
            <input
              className="manager-form_inputs"
              type="text"
              name="producto_autores"
              placeholder="Autor"
              onChange={(event) => handleChange(event, setAutor)}
              required
            />
          </div>
          <div className="manager-form_input-container">
            <label>Precio</label>
            <input
              className="manager-form_inputs"
              type="text"
              name="producto_precio"
              placeholder="Precio"
              onChange={(event) => handleChange(event, setPrecio)}
              required
            />
          </div>
          <div className="manager-form_input-container">
            <label>Stock</label>
            <input
              className="manager-form_inputs"
              type="text"
              name="producto_stock"
              placeholder="Stock"
              onChange={(event) => handleChange(event, setStock)}
              required
            />
          </div>
          <div className="manager-form_input-container">
            <label>Categoría</label>
            <input
              className="manager-form_inputs"
              type="text"
              name="producto_categoria"
              placeholder="Categoría"
              onChange={(event) => handleChange(event, setCategoria)}
              required
            />
          </div>
          <div className="manager-form_input-container">
            <label>Estado</label>
            <input
              className="manager-form_inputs"
              type="text"
              name="producto_estado"
              placeholder="Estado"
              onChange={(event) => handleChange(event, setEstado)}
              required
            />
          </div>
          <div
            className="manager-form_input-container"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label>Imagen</label>
            <input
              onChange={(event) => handleChange(event, setImagen)}
              className="form-control"
              name="imagenProducto"
              type="file"
              accept="image/*"
            />
          </div>
          <div className="manager-form_input-container">
            <label>Descripcion</label>
            <textarea
              rows="7"
              cols="50"
              className="manager-form_inputs"
              type="text"
              name="producto_descripcion"
              placeholder="Escribe una descripción"
              onChange={(event) => handleChange(event, setDescripcion)}
              required
            />
          </div>
        </div>
        <div className="manager-button_action">
          <ButtonAlCarrito type="submit">Subir Producto</ButtonAlCarrito>
        </div>
      </form>
      <div className="manager_typography">
        <h4>Editar/Eliminar Producto</h4>
      </div>
      <div className="book-form-container">
      <ManagerGallery />
      </div>
    </div>
  );
};

export default ManagerForm;
