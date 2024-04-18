// MovieContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [filmsData, setFilmsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/films')
      .then(response => response.json())
      .then(data => setFilmsData(data))
      .catch(error => console.error('Error fetching films:', error));
  }, []);

  return (
    <MovieContext.Provider value={{ filmsData }}>
      {children}
    </MovieContext.Provider>
  );
};
