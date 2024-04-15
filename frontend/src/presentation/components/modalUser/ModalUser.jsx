import React, { useState } from 'react';
import './ModalUser.css'; 

const ModalUser = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState('Datos Personales');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  if (!isOpen) return null;

  return (
    <div className="modalUser">
      <div className="modalUser__content">
       
        <div className="card">
        
            <div className="card__interior">
          <div className="top-nav">
            <div
              className={`nav-item ${activeSection === 'Datos Personales' ? 'active' : ''}`}
              onClick={() => handleNavClick('Datos Personales')}
            >
              Datos Personales
            </div>
            <div
              className={`nav-item ${activeSection === 'Estudios' ? 'active' : ''}`}
              onClick={() => handleNavClick('Estudios')}
            >
              Estudios
            </div>
            <div
              className={`nav-item ${activeSection === 'Cortometrajes' ? 'active' : ''}`}
              onClick={() => handleNavClick('Cortometrajes')}
            >
              Cortometrajes
            </div>
            <div
              className={`nav-item ${activeSection === 'Redes Sociales' ? 'active' : ''}`}
              onClick={() => handleNavClick('Redes Sociales')}
            >
              Redes Sociales
            </div>
            <span className="modalUser__close" onClick={onClose}>×</span>
          </div>
          <div className="content">
            <div className={`section ${activeSection === 'Datos Personales' ? 'active' : ''}`}>
              <h2 className='datosPersonales_title'>Datos Personales</h2>
              <p className='datosPersonales_datos'>Nombre: <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
  <path d="M13.5 6.5l4 4" />
</svg></p>
              <p className='datosPersonales_datos'>Apellido: <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
  <path d="M13.5 6.5l4 4" />
</svg></p>
              <p className='datosPersonales_datos'>Fecha de Nacimiento: <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
  <path d="M13.5 6.5l4 4" />
</svg></p>
              <p className='datosPersonales_datos'>País: <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
  <path d="M13.5 6.5l4 4" />
</svg></p>

            </div>
            <div className={`section ${activeSection === 'Estudios' ? 'active' : ''}`}>
              <h2>formacion</h2>
            </div>
            <div className={`section ${activeSection === 'Cortometrajes' ? 'active' : ''}`}>
              <h2>cortos</h2>
            </div>
            <div className={`section ${activeSection === 'Redes Sociales' ? 'active' : ''}`}>
              <h2>rrss</h2>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ModalUser;
