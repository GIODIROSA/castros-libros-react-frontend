import { useState } from "react";
import "../assets/style/managerForm.css";
import { ButtonAlCarrito } from "../assets/style/styledComponents/buttonAlCarrito";
import ManagerGallery from "./ManagerGallery";

const ManagerForm = () => {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
    price: "",
    image: null,
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
      title: "",
      author: "",
      genre: "",
      description: "",
      price: "",
      image: null,
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
          <div>
            <label>titulo</label>
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
          <div>
            <label>titulo</label>
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
          <div>
            <label>titulo</label>
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
          <div>
            <label>titulo</label>
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
          <div>
            <label>titulo</label>
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
          <div>
            <label>titulo</label>
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
          <div>
            <label>titulo</label>
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
          <div>
            <label>titulo</label>
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
