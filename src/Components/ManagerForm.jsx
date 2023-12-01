import { useState } from "react";
import "../assets/style/managerForm.css";
import { ButtonAlCarrito } from "../assets/style/styledComponents/buttonAlCarrito";
import ManagerGallery from "./ManagerGallery";

const ManagerForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Realizar alguna validación de tipo de archivo si es necesario

      // Mostrar la imagen previa si quieres
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const [bookData, setBookData] = useState({
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  /* const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setBookData({
      ...bookData,
      image: imageFile,
    });
  }; */

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos del libro a la base de datos
    // Por ejemplo, puedes utilizar fetch() o axios para realizar una solicitud POST al servidor
    console.log("Datos del libro:", bookData);
    // Limpia el formulario después de enviar los datos
    setBookData({
     
    });
  };

  return (
    <div className="book-form-container">
      <div className="manager_typography">
        <h4>Agregar Producto</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputs-container">
          {" "}
          <div className="manager-form_input-container">
            <label>Titulo</label>
            <input
              className="manager-form_inputs"
              type="text"
              name="title"
              placeholder="Título"
              value={bookData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="manager-form_input-container">
            <label>Autor</label>
            <input
              className="manager-form_inputs"
              type="text"
              name="autor"
              placeholder="Autor"
              value={bookData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="manager-form_input-container">
            <label>Precio</label>
            <input
              className="manager-form_inputs"
              type="text"
              name="precio"
              placeholder="Precio"
              value={bookData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="manager-form_input-container">
            <label>Stock</label>
            <input
              className="manager-form_inputs"
              type="text"
              name="stock"
              placeholder="Stock"
              value={bookData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="manager-form_input-container">
            <label>Categoría</label>
            <input
              className="manager-form_inputs"
              type="text"
              name="categoria"
              placeholder="Categoría"
              value={bookData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="manager-form_input-container">
            <label>Estado</label>
            <input
              className="manager-form_inputs"
              type="text"
              name="estado"
              placeholder="Estado"
              value={bookData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="manager-form_input-container" style={{ display: "flex", flexDirection: "column" }}>
            <label>Imagen</label>
            <input
             className="manager-form_inputs"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {selectedImage && (
              <div>
                <p style={{marginTop: "0px"}}>Preview</p>
                <img
                  src={selectedImage}
                  alt="Preview"
                  style={{ maxWidth: "100px" }}
                />
              </div>
            )}
          </div>
          <div className="manager-form_input-container">
            <label>Descripcion</label>
            <textarea
              rows="7"
              cols="50"
              className="manager-form_inputs"
              type="text"
              name="descripcion"
              placeholder="Escribe una descripción"
              value={bookData.title}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>{" "}
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
