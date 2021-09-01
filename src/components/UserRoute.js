import React from "react";
import { Route, Redirect } from "react-router-dom";

function UserRoute(props) {
  const { path, exact, component: Component, isLoggedIn, ...rest } = props;
  return (
    <Route
      path={path}
      exact={exact || false}
      render={(routerProps) => {
        return isLoggedIn ? (
          <Component {...routerProps} {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
            }}
          />
        );
      }}
    />
  );
}

export default UserRoute;
