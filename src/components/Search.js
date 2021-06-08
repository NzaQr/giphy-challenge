import React, { useContext, useState } from "react";
import api, { API_SEARCH_PARAMS } from "../api/giphy";
import { FavoritesContext } from "../context/FavoriteContext";
const Search = () => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState([]);
  const [results, setResults] = useState(false);
  const { addFavorites, setIsFavorited, isFavorited } =
    useContext(FavoritesContext);

  const fetchSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await api.get("/search", {
        params: {
          ...API_SEARCH_PARAMS,
          q: query,
        },
      });
      setSearch(res.data.data);
      setResults(true);
      setQuery("");
    } catch (err) {
      console.log(err);
    }
  };

  const renderSearch = search.map((gif) => {
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
            setIsFavorited(gif);
          }}
        >
          {gif.id === isFavorited ? "<3" : "Add to Favorites"}
        </button>
      </div>
    );
  });

  return (
    <div>
      <h1>Search</h1>
      <form onSubmit={fetchSearch}>
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </form>
      {results ? <h1>Results</h1> : ""}
      {renderSearch}
    </div>
  );
};

export default Search;
