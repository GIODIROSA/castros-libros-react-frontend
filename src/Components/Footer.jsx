import ".././assets/style/footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="upper-footer">
        <div className="container">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/favorites">Favoritos</NavLink>
        </div>
      </div>
      <div className="lower-footer">
        <div className="container">
          <p>Todos los derechos reservados 2023</p>
          <div className="social-icons">
            <a href="#">Linkedin</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
