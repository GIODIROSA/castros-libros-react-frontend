import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// FavoritesContext: contexto para manejar los libros favoritos
const FavoritesContext = createContext();

//useFavoritesContext: hook para obtener los libros favoritos y las funciones para manejarlos
export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);
  if (!context) { 
    throw new Error('useFavoritesContext debe usarse dentro de un FavoritesProvider');
    //el error garantiza que el hook se use dentro del contexto
  }
  return context;
};

//FavoritesProvider: componente para proveer el contexto a la aplicación
export const FavoritesProvider = ({ children }) => {
  const [books, setBooks] = useState([]); //estado para almacenar los libros de la base de datos
  const [favorites, setFavorites] = useState([]);//estado para almacenar los libros favoritos

  //fetchData: función para obtener la información de los libros desde el backend
  const fetchData = async () => { 
    try {
      const response = await axios.get('http://localhost:5000/api/books'); //verificar la ruta del servidor
      setBooks(response.data); //almacenar los libros en el estado books
    } catch (error) {
      console.error('Error al obtener libros desde el backend', error);
    }
  };

  //useEffect: hook para ejecutar fetchData al cargar la página
  useEffect(() => { 
    fetchData();
  }, []);

  //handleToggleLike: función para actualizar la propiedad "producto_favorito" de un libro
  const handleToggleLike = async (bookId) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => //mapeo para actualizar la propiedad "producto_favorito" del libro
        book.id === bookId ? { ...book, producto_favorito: !book.producto_favorito } : book 
        //si el id del libro es igual al id seleccionado, "producto_favorito" cambia entre false/true
        )
    );

    //una vez actualizada la propiedad "producto_favorito" en el frontend, se actualiza en el backend
    //y se obtiene la información actualizada de los libros
    try {
      await axios.put(`http://localhost:5000/api/books/toggle-like/${bookId}`); //verificar la ruta del servidor
      fetchData(); 
    } catch (error) {
      console.error('Error al actualizar el estado "me gusta" en el backend', error);
    }
  };

  //función para agregar un libro al array de favoritos
  const handleAddToFavorites = (bookId) => {
    setFavorites((prevFavorites) => [...prevFavorites, bookId]);
  };

  return (
    <FavoritesContext.Provider
      value={{ books, favorites, handleToggleLike, handleAddToFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};