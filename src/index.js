import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FavoritesContextProvider } from "./context/FavoriteContext";

ReactDOM.render(
  <FavoritesContextProvider>
    <App />
  </FavoritesContextProvider>,
  document.getElementById("root")
);
