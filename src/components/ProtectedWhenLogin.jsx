import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../App';

export const ProtectedWhenLogin = ({ user, component: Component, ...rest }) => {
  // const user = useContext(UserContext);
  console.log('protectedLogin');

  return (
    <Route
      {...rest}
      render={(props) => {
        if (user)
          return (
            <Redirect
              to={{ pathname: '/freecourse', state: { from: props.location } }}
            />
          );
        if (!user) return <Component {...props} />;
      }}
    />
  );
};
