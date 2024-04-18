// MovieService.js
export const filterMovies = (filmsData, filterType, filterCountry) => {
    return filmsData.filter(item => {
      const typeMatch = !filterType || (Array.isArray(item.tipo) ? item.tipo.includes(filterType) : item.tipo === filterType);
      const countryMatch = !filterCountry || item.pais === filterCountry;
      return typeMatch && countryMatch;
    });
  };
  