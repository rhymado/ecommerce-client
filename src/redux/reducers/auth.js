import { signIn } from "../actionCreators/actionString";
import { ActionType } from "redux-promise-middleware";

const defaultState = {
  authInfo: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: {},
};

const authReducer = (prevState = defaultState, action) => {
  const { Pending, Fulfilled, Rejected } = ActionType;
  switch (action.type) {
    case signIn.concat("_", Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };

    case signIn.concat("_", Rejected):
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        error: action.payload,
      };

    case signIn.concat("_", Fulfilled):
      localStorage.setItem("token", action.payload.data.result.token);
      // console.log(action.cb);
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        authInfo: action.payload.data.result,
      };

    default:
      return prevState;
  }
};

export default authReducer;
