import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/AppRouter.jsx";
import { LibrosProvider } from "./context/LibrosContext.jsx";
import { CarritoProvider } from './context/CarritoContext';  


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CarritoProvider>
    <LibrosProvider>
      <RouterProvider router={router} />
    </LibrosProvider>
    </CarritoProvider>
  </React.StrictMode>
);
