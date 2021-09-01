import { countUp, countDown } from "../actionCreators/actionString";

const defaultState = {
  number: 0,
  isLoggedIn: false,
};

const countReducer = (prevState = defaultState, action) => {
  // handle action type
  switch (action.type) {
    case countUp:
      return {
        ...prevState,
        number: prevState.number + 1,
      };

    case countDown:
      return {
        ...prevState,
        number: prevState.number - 1,
      };

    default:
      return prevState;
  }
};

export default countReducer;
