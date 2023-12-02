import { useState } from "react";
import "../assets/style/managerForm.css";
import { ButtonAlCarrito } from "../assets/style/styledComponents/buttonAlCarrito";
import ManagerGallery from "./ManagerGallery";
import axios from "axios";

const ManagerForm = () => {
  const [selectedImage, setSelectedImage] = useState(null); // estado de la imagen seleccionada
  const [bookData, setBookData] = useState({ // estado del resto de los datos del libro (nombre, descripción, precio, etc.)
    producto_nombre: "",
    imagenProducto: null, // cambié el nombre de producto_imagen a imagenProducto para que coincida con el nombre en el servidor
    producto_descripcion: "",
    producto_precio: "",
    producto_categoria: "",
    producto_autores: "",
    producto_stock: "",
    producto_estado: "",
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    //validaciones para subir la imagen
    if (file) {
      const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (!allowedTypes.includes(file.type)) {
        alert("Debe cargar una imagen JPEG, PNG o JPG.");
        return;
      }

      const maxSizeInBytes = 5 * 1024 * 1024;
      if (file.size > maxSizeInBytes) {
        alert("El tamaño de la imagen debe ser menor a 5 MB.");
        return;
      }

      // se muestra la imagen seleccionada en el formulario con un FileReader
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);

      setBookData({
        ...bookData,
        imagenProducto: file,
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // se crea un objeto FormData para enviar los datos del libro, dado que contiene una imagen
      const formData = new FormData();
      formData.append("imagenProducto", bookData.imagenProducto);
      formData.append("producto_nombre", bookData.producto_nombre);
      formData.append("producto_descripcion", bookData.producto_descripcion);
      formData.append("producto_precio", bookData.producto_precio);
      formData.append("producto_categoria", bookData.producto_categoria);
      formData.append("producto_autores", bookData.producto_autores);
      formData.append("producto_stock", bookData.producto_stock);
      formData.append("producto_estado", bookData.producto_estado);

      console.log("Datos del libro:", bookData);

      const response = await axios.post("http://localhost:3001/admin", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // multipart/form-data se usa para enviar archivos mixtos (texto e imagen)
        },
      });
      console.log("Respuesta del servidor:", response.data);

      // limpiamos los campos del formulario una vez que se envían los datos por la petición
      setBookData({
        producto_nombre: "",
        imagenProducto: null,
        producto_descripcion: "",
        producto_precio: "",
        producto_categoria: "",
        producto_autores: "",
        producto_stock: "",
        producto_estado: "",
      });

      // también limpiamos la imagen seleccionada
      setSelectedImage(null);
    } catch (error) {
      console.error("Error al enviar los datos del libro:", error);
    }
  };

  return (
    <div className="book-form-container">
      <div className="manager_typography">
        <h4>Agregar Producto</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputs-container">
          <div className="manager-form_input-container">
            <label>Titulo</label>
            <input
              className="manager-form_inputs"
              type="text"
              name="producto_nombre"
              placeholder="Título"
              value={bookData.producto_nombre}
              onChange={handleInputChange}
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
              value={bookData.producto_autores}
              onChange={handleInputChange}
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
              value={bookData.producto_precio}
              onChange={handleInputChange}
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
              value={bookData.producto_stock}
              onChange={handleInputChange}
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
              value={bookData.producto_categoria}
              onChange={handleInputChange}
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
              value={bookData.producto_estado}
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
                <p style={{ marginTop: "0px" }}>Preview</p>
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
              name="producto_descripcion"
              placeholder="Escribe una descripción"
              value={bookData.producto_descripcion}
              onChange={handleInputChange}
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