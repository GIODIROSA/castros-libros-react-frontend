// import React, { createContext, useState } from 'react';

// export const FavoritesContext = createContext();

// export const FavoritesProvider = ({ children }) => {
//   const [favorites, setFavorites] = useState([]);

//   const addFavorite = (product) => {
//     setFavorites([...favorites, product]);
//   };

//   const removeFavorite = (productId) => {
//     setFavorites(favorites.filter((product) => product.id !== productId));
//   };

//   return (
//     <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
//       {children}
//     </FavoritesContext.Provider>
//   );
// };