import Axios from "axios";

const { REACT_APP_BASE_URL, REACT_APP_PRODUCTS_URL } = process.env;

export const getAllProducts = (query) => {
  const url = REACT_APP_BASE_URL + REACT_APP_PRODUCTS_URL + query;
  return Axios.get(url);
};

export const createNewProduct = (body, query) => {
  const queryParams = query || "";
  const url = REACT_APP_BASE_URL + REACT_APP_PRODUCTS_URL + queryParams;
  return Axios.post(url, body);
};
