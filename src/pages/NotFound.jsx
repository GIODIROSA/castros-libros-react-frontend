
import '../assets/style/notFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="NotFoundContainer">
      <h2 className="NotFoundHeading">Error 404</h2>
      <p className="NotFoundText">Página no encontrada</p>
      <Link to="/">
        <button className="Button">Volver al Inicio</button>
      </Link>
    </div>
  );
};

export default NotFound;