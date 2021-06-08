import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoriteContext";

const Favorites = () => {
  const { favorites, removeFavorites } = useContext(FavoritesContext);
  const renderFavorites = favorites.map((favorite, index) => {
    return (
      <div key={favorite} className="container">
        <a href={favorite} target="_blank" rel="noopener noreferrer">
          <img src={favorite} />
        </a>
        <button
          onClick={() => {
            removeFavorites(index);
          }}
        >
          Remove from Favorites
        </button>
      </div>
    );
  });

  return (
    <div>
      <h1>Favorites</h1>
      {renderFavorites}
    </div>
  );
};

export default Favorites;
