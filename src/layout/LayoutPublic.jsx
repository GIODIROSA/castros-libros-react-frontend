import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const LayoutPublic = () => {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default LayoutPublic;
