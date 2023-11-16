import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const LayoutPublic = () => {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
      <footer
        style={{
          backgroundColor: "lightgray",
          padding: "20px",
          textAlign: "center",
        }}
      >
        Este es el footer de mi aplicación.
      </footer>
    </>
  );
};

export default LayoutPublic;
