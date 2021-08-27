import Axios from "axios";

export const getUser = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  return Axios.get(url);
};
