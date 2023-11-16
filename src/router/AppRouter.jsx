import { createBrowserRouter } from "react-router-dom";

//layout - not found
import LayoutPublic from "../layout/LayoutPublic";
import NotFound from "../pages/NotFound";

// pages
import Home from "../pages/Home";
import Cart from "../pages/Cart";

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
    ],
  },
]);
