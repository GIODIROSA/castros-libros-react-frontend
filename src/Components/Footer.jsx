import ".././assets/style/footer.css";
import { NavLink } from "react-router-dom";
import twitterFooterIcon from "../assets/icons/twitterFooterIcon";
import facebookFooterIcon from "../assets/icons/facebookFooterIcon";
import linkedinFooterIcon from "../assets/icons/linkedinFooterIcon";
import instagramFooterIcon from "../assets/icons/instagramFooterIcon";

const Footer = () => {
  const twitterFooterSvg = twitterFooterIcon()
  const facebookFooterSvg = facebookFooterIcon()
  const linkedinFooterSvg = linkedinFooterIcon()
  const instagramFooterSvg = instagramFooterIcon()
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
            <a href="#">{linkedinFooterSvg}</a>
            <a href="#">{twitterFooterSvg}</a>
            <a href="#">{facebookFooterSvg}</a>
            <a href="#">{instagramFooterSvg}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
