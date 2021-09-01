import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { ThemeProvider } from "../utils/contexts/ThemeProvider";
// import UserRoute from "../components/UserRoute";
import { AuthRoute, UserRoute } from "../components/PrivateRoute";
import Home from "./Home";
import Login from "./Login";
import Todo from "./Todo";
import Theme from "./Theme";
import Redux from "./Redux";
import reduxStore from "../redux/store";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        id: 1,
      },
      isLoggedIn: localStorage.getItem("token") ? true : false,
    };
  }
  // state = {
  //   userInfo: {
  //     id: 1,
  //   },
  //   isLoggedIn: false,
  // };
  onLoggedIn = () => {
    // console.log("cb");
    this.setState({
      isLoggedIn: true,
    });
  };
  onLoggedOut = () => {
    localStorage.removeItem("token");
    // localStorage.setItem("token", "");
    this.setState({
      isLoggedIn: false,
    });
  };
  // componentDidMount() {
  //   const token = localStorage.getItem("token");
  //   if (token)
  //     this.setState({
  //       isLoggedIn: true,
  //     });
  // }
  render() {
    return (
      <Provider store={reduxStore}>
        <ThemeProvider>
          <Router>
            {/* localhost/ */}
            {/* <Route
            path="/"
            exact
            render={(props) => <Home user={userInfo} {...props} />}
          /> */}
            <Route
              path="/"
              exact
              render={(props) => (
                <Home
                  user={this.state.userInfo}
                  isLoggedIn={this.state.isLoggedIn}
                  {...props}
                />
              )}
            />
            {/* localhost/auth */}
            {/* <Route
            path="/auth"
            render={(props) => (
              <Login onLoggedIn={this.onLoggedIn} {...props} />
            )}
          /> */}
            <AuthRoute
              path="/auth"
              component={Login}
              isLoggedIn={this.state.isLoggedIn}
              onLoggedIn={this.onLoggedIn}
            />
            <UserRoute
              path="/todo"
              component={Todo}
              isLoggedIn={this.state.isLoggedIn}
            />
            <AuthRoute
              path="/theme"
              component={Theme}
              isLoggedIn={this.state.isLoggedIn}
            />
            <Route path="/redux" component={Redux} />
          </Router>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
