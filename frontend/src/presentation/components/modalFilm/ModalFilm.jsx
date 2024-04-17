import React, { useRef } from "react";
import "./ModalFilm.css";

const Modal = ({ onClose }) => {
  const modalRef = useRef(null);

  
  

  return (
    <div className="modalFilm" ref={modalRef}>
       
      <div className="modalFilm__content">
      
        <iframe
          title="Vimeo Video"
          src="https://player.vimeo.com/video/90952744"
          width="560"
          height="315"
          frameBorder="0"
          allowFullScreen
        ></iframe>

        
      </div>
      <button className="close-modalFilm-button" onClick={onClose}>X</button>
    </div>
  );
};

export default Modal;
