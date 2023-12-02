import { useState } from "react";
import "../assets/style/managerForm.css";
import { ButtonAlCarrito } from "../assets/style/styledComponents/buttonAlCarrito";
import ManagerGallery from "./ManagerGallery";
import axios from "axios";

// ManagerForm componente que muestra un formulario para agregar un nuevo libro desde el admin
const ManagerForm = () => {
  const [selectedImage, setSelectedImage] = useState(null); // selectedImagen es el estado para almacenar la imagen seleccionada
  const [bookData, setBookData] = useState({ // bookData es el estado que almacena los datos del libro
    producto_nombre: "",
    producto_imagen: "",
    producto_descripcion: "",
    producto_precio: "",
    producto_categoria: "",
    producto_autores: "",
    producto_stock: "",
    producto_estado: "",
   });

  // función que escucha el cambio en el input de la imagen
  const handleImageChange = (event) => {
    const file = event.target.files[0]; //obtiene el primer objeto del array de archivos y lo almacena en la variable file
    console.log("Imagen seleccionada:", file);
    if (file) {
      // validación de tipo de archivo
      const allowedTypes = ["image/jpeg", "image/png", "image/jpg"]; //allowedTypes es un array que contiene los tipos de archivos permitidos
      if (!allowedTypes.includes(file.type)) {
        alert("Debe cargar una imagen JPEG, PNG o JPG.");
        return;
      }
  
      // validación de tamaño de archivo
      const maxSizeInBytes = 5 * 1024 * 1024; //permite archivos de hasta 5 MB, 1024 bytes = 1 KB, 1024 KB = 1 MB
      if (file.size > maxSizeInBytes) {
        alert("El tamaño de la imagen debe ser menor a 5 MB.");
        return;
      }
  
      // Si la imagen es válida, la convierte a base64 y la almacena en el estado selectedImage
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }

    console.log("Imagen seleccionada:", file);
  };

  // función que escucha el cambio en los inputs de texto
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(`Cambio en ${name}:`, value);
    setBookData({
      ...bookData,
      [name]: value,
    });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // petición para enviar los datos del libro al servidor
      const response = await axios.post("http://localhost:3001/admin", bookData);
      console.log("Respuesta del servidor:", response.data);
  
      // limpia el formulario después de enviar los datos
      setBookData({
        producto_nombre: "",
        producto_imagen: "",
        producto_descripcion: "",
        producto_precio: "",
        producto_categoria: "",
        producto_autores: "",
        producto_stock: "",
        producto_estado: "",
      });

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
          {" "}
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
              name="myFile" // nombre del archivo que se envía al servidor para que cuadre con la configuración de multer
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
              name="producto_descripcion"
              placeholder="Escribe una descripción"
              value={bookData.producto_descripcion}
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
