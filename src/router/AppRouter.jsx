import { createBrowserRouter } from "react-router-dom";

//layout - not found
import LayoutPublic from "../layout/LayoutPublic";
import NotFound from "../pages/NotFound";

// pages
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import VerDetalle from "../pages/VerDetalle";
import Profile from "../pages/Profile";
import BookManager from "../pages/BookManager";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/registro",
        element: <Login />,
      },
      {
        path: "/productos/:id",
        element: <VerDetalle />,
      },
      {
        path: "/perfil",
        element: <Profile />,
      },
      {
        path: "/manager",
        element: <BookManager />,
      },
    ],
  },
]);
