import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ProductCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  text-align: center;
  flex: 1 0 21%; /* Establece el ancho para 4 elementos por fila */
  
  @media (max-width: 767px) {
    flex: 1 0 48%; /* Cambia el ancho para 2 elementos por fila en dispositivos móviles */
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 8px;
`;

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/productos');
        setProducts(response.data);
      } catch (error) {
        console.error('Error al obtener la lista de productos:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleLike = (productId) => {
    // Código para el botón me gusta
    console.log(`Me gusta el producto con ID ${productId}`);
  };

  const handleAddToCart = (productId) => {
    // Código para el botón agregar al carrito
    console.log(`Agregado al carrito: Producto con ID ${productId}`);
  };

  return (
    <GalleryContainer>
      <h2>Galería de Productos</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ProductCard key={product.producto_id}>
            <ProductImage
              src={`http://localhost:3001/${product.producto_imagen}`}
              alt={product.producto_nombre}
            />
            <h3>{product.producto_nombre}</h3>
            <p>{product.producto_descripcion}</p>
            <p>Autores: {product.producto_autores}</p>
            <p>Precio: {product.producto_precio}</p>
            <Button onClick={() => handleLike(product.producto_id)}>
              Me gusta
            </Button>
            <Button onClick={() => handleAddToCart(product.producto_id)}>
              Agregar al Carrito
            </Button>
          </ProductCard>
        ))}
      </div>
    </GalleryContainer>
  );
};

export default Products;