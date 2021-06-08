import React, { useEffect, useState } from "react";

const FavoritesContext = React.createContext();

function FavoritesContextProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const json = localStorage.getItem("gifs");
    const loadedGifs = JSON.parse(json);
    if (loadedGifs) {
      setFavorites(loadedGifs);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(favorites);
    localStorage.setItem("gifs", json);
  }, [favorites]);

  const addFavorites = (newFavorite) => {
    setFavorites([...favorites, newFavorite]);
    setIsFavorited(true);
  };

  const removeFavorites = (i) => {
    setFavorites(favorites.filter((favorite, index) => index !== i));
  };

  const value = {
    favorites,
    setIsFavorited,
    isFavorited,
    addFavorites,
    removeFavorites,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export { FavoritesContextProvider, FavoritesContext };
