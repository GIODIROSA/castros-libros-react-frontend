import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './pages/NotFound'; 
import Cart from './pages/Cart';

const Home = () => (
  <div>
    <h2>¡Bienvenido a mi aplicación!</h2>
    {/* Contenido de la página de inicio */}
  </div>
);

const App = () => {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route component={NotFound} />
        </Switch>
    </Router>
  );
};

export default App;