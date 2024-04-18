import  { useState, useRef } from 'react';
import { useMovieContext } from '../../../middleware/context/MovieContext';
import { filterMovies } from '../../../services/MovieService';
import './CarrouselFilm.css';
import FilterButtons from './FilterButtons';
import CarrouselContent from './CarrouselContent';

const CarrouselFilm = () => {
  const { filmsData } = useMovieContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filterType, setFilterType] = useState(null);
  const [filterCountry, setFilterCountry] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const thumbnailContainerRef = useRef(null);

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

  const filteredResults = filterMovies(filmsData, filterType, filterCountry);
  const currentItem = filteredResults[currentIndex];

  return (
    <div className="carrousel-container">
      <FilterButtons
        onFilterType={handleFilterType}
        onFilterCountry={handleFilterCountry}
      />
      <CarrouselContent
        filteredResults={filteredResults}
        currentItem={currentItem}
        currentIndex={currentIndex}
        thumbnailContainerRef={thumbnailContainerRef}
        showModal={showModal}
        setShowModal={setShowModal}
        scrollPageToTop={scrollPageToTop}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
};

export default CarrouselFilm;
