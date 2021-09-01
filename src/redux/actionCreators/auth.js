import { postLogin } from "../../utils/https/auth";
import { signIn } from "./actionString";

export const loginAction = (body, cb) => {
  return {
    type: signIn,
    payload: postLogin(body),
  };
};

export const registerAction = () => {
  return {};
};

export const logoutAction = () => {
  return {};
};
