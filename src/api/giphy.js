import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;

export default axios.create({
  baseURL: "http://api.giphy.com/v1/gifs",
});

export const API_TRENDING_PARAMS = {
  api_key: api_key,
  limit: 10,
};

export const API_SEARCH_PARAMS = {
  api_key: api_key,
  limit: 20,
};
