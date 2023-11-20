import styled from "styled-components";

export const ButtonAlCarrito = styled.button`
    background-color: white;
    color: black;
    border: 2px solid black;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'DM Sans', sans-serif;

    @media (max-width: 768px) {
      font-size: 14px;
      padding: 8px 16px;
    }

    &:hover {
      background-color: black;
      color: white;
    }
  `;