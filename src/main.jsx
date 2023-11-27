import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/AppRouter.jsx";
import { LibrosProvider } from "./context/LibrosContext.jsx";
import { UsuarioProvider } from "./context/UsuarioContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UsuarioProvider>
      <LibrosProvider>
        <RouterProvider router={router} />
      </LibrosProvider>
    </UsuarioProvider>
  </React.StrictMode>
);
