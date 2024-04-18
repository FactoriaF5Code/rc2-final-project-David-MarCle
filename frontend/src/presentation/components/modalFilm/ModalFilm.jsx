import React, { useRef } from "react";
import "./ModalFilm.css";

const ModalFilm = ({ onClose, videoUrl }) => {
  const modalRef = useRef(null);

  return (
    <div className="modalFilm" ref={modalRef}>
      <div className="modalFilm__content">
        <iframe
          title="Video"
          src={videoUrl}
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

export default ModalFilm;
