import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";

function App() {
  const userInfo = {
    id: 1,
  };
  return (
    <Router>
      {/* localhost/ */}
      <Route
        path="/:id"
        exact
        render={(props) => <Home user={userInfo} {...props} />}
      />
      {/* localhost/auth */}
      <Route path="/auth" component={Login} />
    </Router>
  );
}

export default App;
