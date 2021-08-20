import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";

function App() {
  return (
    <Router>
      {/* localhost/ */}
      <Route path="/" exact component={Home} />
      {/* localhost/auth */}
      <Route path="/auth" component={Login} />
    </Router>
  );
}

export default App;
