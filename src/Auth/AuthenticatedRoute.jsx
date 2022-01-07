import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const isAuthenticated = authContext.isAuthenticated();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated)
          return (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          );
        return <Component {...props} />;
      }}
    />
  );
};
