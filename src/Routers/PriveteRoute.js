import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

export const PriveteRoute = ({
  isAutenticated,
  component: Component,
  ...rest
}) => {
    localStorage.setItem('lastPath', rest.location.pathname);
  return (
    <Route
      {...rest}
      component={(props) =>
        isAutenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

PriveteRoute.propTypes = {
    isAutenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
