import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import CartIcon from "../assets/icons/cartIcon";
import { useNavigate } from "react-router-dom";
import { LibrosContext } from "../context/LibrosContext";
import { CarritoProvider, useCarrito } from "../context/CarritoContext";

const GalleryContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;

const ProductCard = styled.div`
  padding: 2%;
  margin: 2%;
  text-align: center;
  flex: 1 0 21%;

  @media (max-width: 767px) {
    flex: 1 0 48%;
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
`;

const CartButton = styled.button`
  background-color: #ece9e2;
  color: #fff;
  padding: 2% 4%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 2%;
`;

const LikeButton = styled.button`
  background-color: #5d573f;
  font-size: 1.3rem;
  color: #fff;
  padding: 2% 4%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 2%;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.currentPage ? "#5D573F" : "transparent"};
  color: ${(props) => (props.currentPage ? "#fff" : "")};
  padding: 1% 2%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0;
`;

const ArrowButton = styled.button`
  background-color: transparent;
  padding: 1% 2%;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 1%;
`;

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]); //estado para la lista de productos
  const [currentPage, setCurrentPage] = useState(1); //estado para la paginación
  const productsPerPage = 6; //cantidad de cards por página
  const { valoresContextoLibros } = useContext(LibrosContext);
  const { agregarAlCarrito } = useCarrito();


  const { setLibroSeleccionado } = valoresContextoLibros;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/productos?limits=20");
        setProducts(response.data);
      } catch (error) {
        console.error("Error al obtener la lista de productos:", error);
      }
    };

    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage; //índice del último producto de la página
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage; //índice del primer producto de la página
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  ); //lista de productos de la página actual

  const handleLike = (productId) => {
    //aquí va la lógica para manejar el botón Me gusta
    console.log(`Me gusta el producto con ID ${productId}`);
  };


  //agregar producto al carrito
  const handleAddToCart = (productoId) => {
    try {
      agregarAlCarrito(productoId);
      console.log(`Agregado al carrito: ${productoId}`);
    } catch (error) {
      console.error("Error al agregar al carrito:", error);
    }
  };


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //generación de lista de números de página
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Función para guardar el libro seleccionado e ir la ruta del mismo
  const verDetalles = (detalles) => {
    setLibroSeleccionado(detalles);

    navigate(`/productos/${detalles.producto_id}`);
  };


  return (
    <CarritoProvider>
    <GalleryContainer>
      <h2>Galería de Productos</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {currentProducts.map(
          ({
            producto_id,
            producto_imagen,
            producto_nombre,
            producto_descripcion,
            producto_autores,
            producto_precio,
          }) => (
            <ProductCard key={producto_id}>
              <div
                onClick={() =>
                  verDetalles({
                    producto_id,
                    producto_imagen,
                    producto_nombre,
                    producto_descripcion,
                    producto_autores,
                    producto_precio,
                  })
                }
                style={{ cursor: "pointer" }}
              >
                <ProductImage
                  src={`http://localhost:3001/${producto_imagen}`}
                  alt={producto_nombre}
                />
                <h3>{producto_nombre}</h3>
              </div>{" "}
              <p>{producto_descripcion}</p>
              <p>Autores: {producto_autores}</p>
              <p>Precio: {producto_precio}</p>
              <LikeButton onClick={() => handleLike(producto_id)}>
                <span>♡</span>
              </LikeButton>
              <CartButton onClick={() => handleAddToCart(producto_id)}>
                <CartIcon />
              </CartButton>
            </ProductCard>
          )
        )}
      </div>
      <PaginationContainer>
        <ArrowButton
          onClick={() =>
            setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
          }
        >
          {"<"}
        </ArrowButton>
        {pageNumbers.map((number) => (
          <PaginationButton
            key={number}
            onClick={() => paginate(number)}
            /*   currentPage={currentPage === number} */
          >
            {number}
          </PaginationButton>
        ))}
        <ArrowButton
          onClick={() =>
            setCurrentPage((prevPage) =>
              Math.min(
                prevPage + 1,
                Math.ceil(products.length / productsPerPage)
              )
            )
          }
        >
          {">"}
        </ArrowButton>
      </PaginationContainer>
    </GalleryContainer>
    </CarritoProvider>
  );
};

export default Products;
