import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { AuthContext } from '../Auth/AuthContext';
// import { UserContext } from '../App';

export const ProtectedWhenLogin = ({ component: Component, ...rest }) => {
  // const user = useContext(UserContext);
  const authContext = useContext(AuthContext);
  const isAuthenticated = authContext.isAuthenticated();
  console.log('protectedLogin');

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated)
          return (
            <Redirect
              to={{ pathname: '/freecourse', state: { from: props.location } }}
            />
          );
        return <Component {...props} />;
      }}
    />
  );
};
