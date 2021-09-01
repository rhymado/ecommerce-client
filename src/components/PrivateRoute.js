import React from "react";
import { Route, Redirect } from "react-router-dom";

// const roles = ["guest", "user", "owner", "admin"];

export function AuthRoute({
  path,
  exact,
  component: Component,
  isLoggedIn,
  ...rest
}) {
  return (
    <Route
      path={path}
      exact={exact || false}
      render={(...routerProps) =>
        isLoggedIn ? (
          <Redirect to="/" />
        ) : (
          <Component {...routerProps} {...rest} />
        )
      }
    />
  );
}

export function UserRoute(props) {
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
