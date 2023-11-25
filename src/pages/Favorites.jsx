// import React from 'react';
// import { useFavoritesContext } from '../context/FavoritesContext';

// // Favorites: componente para mostrar los libros favoritos
// const Favorites = () => {
//   //obtenemos los libros favoritos y la función para actualizar el estado "producto_favorito" desde el contexto
//   const { books, favorites, handleToggleLike } = useFavoritesContext(); 

//   //favoriteBooks: array con los libros favoritos filtrados desde el estado books
//   const favoriteBooks = books.filter((book) => favorites.includes(book.producto_id)); 

//   return (
//     <div>
//       <h2>Favoritos</h2>
//       {favoriteBooks.map((book) => (
//         <div key={book.producto_id}>
//           <img
//              src={`http://localhost:5000/uploads/${book.producto_imagen}`} //verificar la ruta de la imagen del servidor
//              alt={book.producto_nombre}
//           />
//           <h3>{book.producto_nombre}</h3>
//           <p>{book.producto_descripcion}</p>
//           <p>Autores: {book.producto_autores}</p>
//           <p>Precio: {book.producto_precio}</p>
//           <button onClick={() => handleToggleLike(book.producto_precio)}>
//             {book.producto_favorito ? '❤️' : '🤍'} 
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Favorites;

import React from 'react'

const Favorites = () => {
  return (
    <div>Favorites</div>
  )
}

export default Favorites