import Axios from "axios";

const { REACT_APP_BASE_URL } = process.env;

export const postLogin = (body) => {
  const url = REACT_APP_BASE_URL + "/auth/login";
  return Axios.post(url, body);
};
