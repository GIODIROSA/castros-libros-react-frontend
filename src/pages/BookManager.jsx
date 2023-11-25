import React, { useState } from "react";
import "../assets/style/bookManager.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BookManager = () => {
  const navigate = useNavigate();
  const [bookData, setBookData] = useState({
    bookName: "",
    description: "",
    image: "",
    category: "",
    price: "",
    authors: "",
    stock: "",
    status: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Lógica para enviar datos a la API
      console.log("Datos del libro a enviar:", bookData);
      // Axios u otra llamada a la API para enviar los datos
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <div className="book-manager-container"> {/* Clase del contenedor actualizada */}
      {/* El resto de tu estructura de formulario aquí */}
      <form className="book-form" onSubmit={handleSubmit}>
        <label>Nombre del libro</label>
        <input
          type="text"
          name="bookName"
          placeholder="Nombre del libro"
          value={bookData.bookName}
          onChange={handleInputChange}
        />
        <label>Descripción</label>
        <input
          type="text"
          name="description"
          placeholder="Descripción"
          value={bookData.description}
          onChange={handleInputChange}
        />
        <label>Imagen</label>
        <input
          type="file"
          name="image"
          placeholder="Imagen"
          value={bookData.image}
          onChange={handleInputChange}
          accept="image.jpg, image.jpeg, image.png"
        />
        <label>Categoría</label>
        <input
          type="text"
          name="category"
          placeholder="Categoría"
          value={bookData.category}
          onChange={handleInputChange}
        />
        <label>Precio</label>
        <input
          type="text"
          name="price"
          placeholder="Precio"
          value={bookData.price}
          onChange={handleInputChange}
        />
        <label>Autores</label>
        <input
          type="text"
          name="authors"
          placeholder="Autores"
          value={bookData.authors}
          onChange={handleInputChange}
        />
        <label>Stock</label>
        <input
          type="text"
          name="stock"
          placeholder="Stock"
          value={bookData.stock}
          onChange={handleInputChange}
        />
        <label>Estado</label>
        <input
          type="text"
          name="status"
          placeholder="Estado"
          value={bookData.status}
          onChange={handleInputChange}
        />
        <button className="add-book-button">Agregar Libro</button> {/* Clase del botón actualizada */}
      </form>
    </div>
  );
};

export default BookManager;