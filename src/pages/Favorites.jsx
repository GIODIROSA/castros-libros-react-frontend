import React from 'react';
import { useFavoritesContext } from '../context/FavoritesContext';

// Favorites: componente para mostrar los libros favoritos
const Favorites = () => {
  //obtenemos los libros favoritos y la función para actualizar el estado "producto_favorito" desde el contexto
  const { books, favorites, handleToggleLike } = useFavoritesContext(); 

  //favoriteBooks: array con los libros favoritos filtrados desde el estado books
  const favoriteBooks = books.filter((book) => favorites.includes(book.producto_id)); 

  return (
    <div className='castros-favoritos-contenedor'>
      <h2 className='castros-favoritos-titulo'>Favoritos</h2>
      {favoriteBooks.map((book) => (
        <div key={book.producto_id}>
          <img className='castros-favoritos-card-imagen'
             src={`http://localhost:5000/uploads/${book.producto_imagen}`} //verificar la ruta de la imagen del servidor
             alt={book.producto_nombre}
          />
          <h3 className='castros-favoritos-card-nombre'>{book.producto_nombre}</h3>
          <p className='castros-favoritos-card-descripcion'>{book.producto_descripcion}</p>
          <p className='castros-favoritos-card-autores'>Autores: {book.producto_autores}</p>
          <p className='castros-favoritos-card-precio'>Precio: {book.producto_precio}</p>
          <button className='castros-favoritos-card-boton'onClick={() => handleToggleLike(book.producto_id)}>
            {book.producto_favorito ? '❤️' : '🤍'} 
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;