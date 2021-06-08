import React, { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "../context/FavoriteContext";
import api, { API_TRENDING_PARAMS } from "../api/giphy";

const Trending = () => {
  const [trending, setTrending] = useState([]);

  const currentItems = trending.slice(0, 10);
  const { addFavorites, setIsFavorited, isFavorited } =
    useContext(FavoritesContext);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const res = await api.get("/trending", {
          params: {
            ...API_TRENDING_PARAMS,
          },
        });
        setTrending(res.data.data);
        console.log(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTrending();
  }, []);

  const renderTrending = currentItems.map((gif) => {
    return (
      <div key={gif.id} className="container">
        <a
          href={gif.images.fixed_width.webp}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gif.images.fixed_width.webp} />
        </a>
        <button
          onClick={() => {
            addFavorites(gif.images.fixed_width.webp);
            setIsFavorited(gif.id);
          }}
        >
          {gif.id === isFavorited ? "Added!" : "Add to Favorites"}
        </button>
      </div>
    );
  });

  return (
    <div>
      <h1>Trending</h1>
      {renderTrending}
    </div>
  );
};

export default Trending;
