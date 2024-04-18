import React from 'react';

const FilterButtons = ({ onFilterType, onFilterCountry }) => (
  <div className="filter-container">
    <button className='filter-containerButton' onClick={() => onFilterType("Comedy")}>Comedia</button>
    <button onClick={() => onFilterType("Horror")}>Horror</button>
    <button onClick={() => onFilterType("Adventure")}>Aventura</button>
    <button onClick={() => onFilterType("Drama")}>Drama</button>
    <button onClick={() => onFilterType("Thriller")}>Thriller</button>
    <button onClick={() => onFilterType("Sci-Fi")}>Sci-Fi</button>
    <button onClick={() => onFilterCountry("Venezuela")}>Venezuela</button>
    <button onClick={() => onFilterCountry("España")}>España</button>
    <button onClick={() => onFilterCountry("Argentina")}>Argentina</button>
  </div>
);

export default FilterButtons;
