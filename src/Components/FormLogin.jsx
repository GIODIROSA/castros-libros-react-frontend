import { useState } from "react";
import "../assets/style/formLogin.css"

const FormLogin = () => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container-login">
      <div className="tabs-login">
        <button
          className={activeTab === 'login' ? 'active' : ''}
          onClick={() => handleTabChange('login')}
        >
          Ingresar
        </button>
        <button
          className={activeTab === 'register' ? 'active' : ''}
          onClick={() => handleTabChange('register')}
        >
          Registrarse
        </button>
      </div>
      <div className="login-container">
        {activeTab === 'login' && (
          <form className="login-form">
            <label>Email</label>
            <input type="email" placeholder="Ingresa tu email" />
            <label>Contraseña</label>
            <input type="password" placeholder="Contraseña" />
            <button className="login-button_action">Ingresar</button>
          </form>
        )}
        {activeTab === 'register' && (
          <form className="register-form">
              <label>Nombre</label>
            <input type="Nombre" placeholder="Ingresa tu Nombre" />
             <label>Email</label>
            <input type="email" placeholder="Ingresa tu email" />
            <label>Contraseña</label>
            <input type="password" placeholder="Contraseña" />
            <button className="login-button_action">Registrarse</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FormLogin;