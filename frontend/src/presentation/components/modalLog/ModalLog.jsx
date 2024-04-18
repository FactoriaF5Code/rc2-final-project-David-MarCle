import React, { useState } from "react";
import "./ModalLog.css";

const ModalLogin = ({ isOpen, onClose }) => {
  const [log, setLog] = useState({
    email: "",
    password: "",
  });
  const [register, setRegister] = useState({
    email: "",
    password: "",
    name: "",
    lastName: "",
    phone: "",
  });

  const [isRegistering, setIsRegistering] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (isRegistering) {
      setRegister({ ...register, [name]: value });
    } else {
      setLog({ ...log, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      console.log(register);
    } else {
      /*Lógica*/
    }
  };

  return (
    <div className={`modal ${isOpen ? "show" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          X
        </span>
        <form className="Form" onSubmit={handleSubmit}>
          <label>Correo electrónico:</label>
          <input
            type="email"
            name="email"
            value={log.email}
            onChange={handleInputChange}
            required
          ></input>

          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={log.password}
            onChange={handleInputChange}
            required
          ></input>

          <button type="submit">Iniciar sesión</button>
          <p>
            ¿No tienes una cuenta?{" "}
            <button>
              Regístrate
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ModalLogin;
