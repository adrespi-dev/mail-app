import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import mockAuth from '../Auth/authService';

const PrivateRoute: React.FC<any> = ({ children, rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        mockAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/auth',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
