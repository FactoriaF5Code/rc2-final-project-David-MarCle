
import ModalFilm from '../modalFilm/ModalFilm';
import PropTypes from 'prop-types';

const CarrouselContent = ({
  filteredResults,
  currentItem,
  currentIndex,
  thumbnailContainerRef,
  showModal,
  setShowModal,
  scrollPageToTop,
  setCurrentIndex
}) => (
  <div className="carrousel-content" ref={thumbnailContainerRef}>
    <div className="row">
      <div className="column">
        {currentItem && currentItem.urlCartel && (
          <img
            src={currentItem.urlCartel}
            alt={currentItem.titulo}
            className="poster-image"
          />
        )}
      </div>
      <div className="column">
        <div className="description">
          {currentItem && (
            <>
              <h2>Título:  {currentItem.titulo}</h2>
              <p>País:  {currentItem.pais}</p>
              <p>Año:  {currentItem.año}</p>
              <p>Duración:  {currentItem.duracion}</p>
              <p>Género:  {Array.isArray(currentItem.tipo) ? currentItem.tipo.join(', ') : currentItem.tipo}</p>
              <div className='buttons-container'>
                <button className="watch-video-button" onClick={() => setShowModal(true)}>Ver vídeo</button>
                <button className="info-button" >+  información</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
    <div className="thumbnail-container">
      {filteredResults.map((item, id) => (
        <img
          key={id}
          src={item.urlCartel}
          alt={item.titulo}
          className={`thumbnail ${id === currentIndex ? 'active' : ''}`}
          onClick={() => {
            setCurrentIndex(id);
            scrollPageToTop();
          }}
        />
      ))}
    </div>
    {showModal && <ModalFilm videoUrl={currentItem.urlPelicula} onClose={() => setShowModal(false)} />}
  </div>
);
CarrouselContent.propTypes = {
    filteredResults: PropTypes.array.isRequired,
    currentItem: PropTypes.object,
    currentIndex: PropTypes.number.isRequired,
    thumbnailContainerRef: PropTypes.object.isRequired,
    showModal: PropTypes.bool.isRequired,
    setShowModal: PropTypes.func.isRequired,
    scrollPageToTop: PropTypes.func.isRequired,
    setCurrentIndex: PropTypes.func.isRequired
  };

export default CarrouselContent;
