import  { useState, useRef, useEffect } from 'react';
import './CarrouselFilm.css';

const CarrouselFilm = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filterType, setFilterType] = useState(null);
  const [filterCountry, setFilterCountry] = useState(null);
  const [filmsData, setFilmsData] = useState([]);
  const thumbnailContainerRef = useRef(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/films')
      .then(response => response.json())
      .then(data => setFilmsData(data))
      .catch(error => console.error('Error fetching films:', error));
  }, []);

  const handleFilterType = (tipo) => {
    setCurrentIndex(0);
    setFilterType(tipo);
    setFilterCountry(null);
    scrollPageToTop();
  };

  const handleFilterCountry = (pais) => {
    setCurrentIndex(0);
    setFilterCountry(pais);
    setFilterType(null);
    scrollPageToTop();
  };

  const scrollPageToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredResults = filmsData.filter(item => {
    const typeMatch = !filterType || (Array.isArray(item.tipo) ? item.tipo.includes(filterType) : item.tipo === filterType);
    const countryMatch = !filterCountry || item.pais === filterCountry;
    return typeMatch && countryMatch;
  });
  console.log(filteredResults); 
  const currentItem = filteredResults[currentIndex];

  return (
    <div className="carrousel-container">
      <div className="filter-container">
        <button className='filter-containerButton' onClick={() => handleFilterType("Comedy")}>Comedia</button>
        <button onClick={() => handleFilterType("Horror")}>Horror</button>
        <button onClick={() => handleFilterType("Adventure")}>Aventura</button>
        <button onClick={() => handleFilterType("Drama")}>Drama</button>
        <button onClick={() => handleFilterType("Thriller")}>Thriller</button>
        <button onClick={() => handleFilterType("Sci-Fi")}>Sci-Fi</button>
        <button onClick={() => handleFilterCountry("Venezuela")}>Venezuela</button>
        <button onClick={() => handleFilterCountry("España")}>España</button>
        <button onClick={() => handleFilterCountry("Argentina")}>Argentina</button>
      </div>

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
                  <p>Director:  {currentItem.director}</p>
                  <p>Actores:  {currentItem.reparto}</p>
                  <p>Cámara:  {currentItem.camara}</p>
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
      </div>
    </div>
  );
};

export default CarrouselFilm;
