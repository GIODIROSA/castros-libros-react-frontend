import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/AppRouter.jsx";
import { LibrosProvider } from "./context/LibrosContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LibrosProvider>
      <RouterProvider router={router} />
    </LibrosProvider>
  </React.StrictMode>
);
