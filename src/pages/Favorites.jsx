import React from 'react';
import { useFavoritesContext } from '../context/FavoritesContext';

// Favorites: componente para mostrar los libros favoritos
const Favorites = () => {
  //obtenemos los libros favoritos y la función para actualizar el estado "producto_favorito" desde el contexto
  const { books, favorites, handleToggleLike } = useFavoritesContext(); 

  //favoriteBooks: array con los libros favoritos filtrados desde el estado books
  const favoriteBooks = books.filter((book) => favorites.includes(book.id)); 

  return (
    <div>
      <h2>Favoritos</h2>
      {favoriteBooks.map((book) => (
        <div key={book.id}>
          <img
             src={`http://localhost:5000/uploads/${book.image}`} //verificar la ruta de la imagen del servidor
             alt={book.name}
          />
          <h3>{book.name}</h3>
          <p>{book.description}</p>
          <p>Autores: {book.authors.join(', ')}</p>
          <p>Precio: {book.price}</p>
          <button onClick={() => handleToggleLike(book.id)}>
            {book.producto_favorito ? '❤️' : '🤍'} 
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;