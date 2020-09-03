import React, { useContext } from "react";
import { AuthContext } from "../store";
import { Route, Redirect } from "react-router";

export default ({ component: RouteComponent, ...rest }) => {
  const { userData, loading } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(routerProps) => {
        if (!loading) {
          if (userData) {
            return <RouteComponent {...routerProps} />;
          } else {
            return <Redirect to="/login" />;
          }
        } else {
          return <h1>Loading...</h1>;
        }
      }}
    />
  );
};
