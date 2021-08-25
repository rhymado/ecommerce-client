import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { ThemeProvider } from "../utils/contexts/ThemeProvider";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Todo from "../pages/Todo";
import Theme from "../pages/Theme";

function App() {
  const userInfo = {
    id: 1,
  };
  return (
    <ThemeProvider>
      <Router>
        {/* localhost/ */}
        <Route
          path="/"
          exact
          render={(props) => <Home user={userInfo} {...props} />}
        />
        {/* localhost/auth */}
        <Route path="/auth" component={Login} />
        <Route path="/todo" component={Todo} />
        <Route path="/theme" component={Theme} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
