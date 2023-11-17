import React, { useState } from 'react';
import styled from 'styled-components';


const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  margin: 20px; /* Agregado espacio entre el contenedor y los bordes de la página */
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;

  img {
    width: 100%;
    height: auto;
  }
`;

const LikeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Producto 1', image: '09elCodigoDaVinci.jpg', liked: false },
    { id: 2, name: 'Producto 2', image: '14laGenteOpina.jpg', liked: false },
    { id: 3, name: 'Producto 3', image: '16elArca.jpg', liked: false },
    { id: 4, name: 'Producto 4', image: '27elJardinSecreto.jpg', liked: false },
    { id: 5, name: 'Producto 5', image: '32comoNoEscribi.jpg', liked: false },
    { id: 6, name: 'Producto 6', image: '38dondeEstaWally.jpg', liked: false }, 
  ]);


  const handleAddToCart = (productId) => {
    // Implementar lógica para agregar un producto al carrito
    console.log(`Producto ${productId} agregado al carrito`);
  };

  const handleToggleLike = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, liked: !product.liked } : product
      )
    );
  };

  return (
    <div>
      <h2>Galería de Productos</h2>
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <img src={`/img/${product.image}`} alt={product.name} />
            <h3>{product.name}</h3>
            <button onClick={() => handleAddToCart(product.id)}>Agregar al carrito</button>
            <LikeButton onClick={() => handleToggleLike(product.id)}>
              {product.liked ? '❤️' : '🤍'}
              {product.liked ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            </LikeButton>
          </ProductCard>
        ))}
      </ProductsContainer>
    </div>
  );
};

export default Products;