import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import mockAuth from '../Auth/authService';

const PrivateRoute: React.FC<any> = ({ children, rest, isAuthenticated }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
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

const mapStateToPros = (state: any) => {
  const { isAuthenticated } = state;
  return {
    isAuthenticated,
  };
};
const PrivateRouteContainer = connect(mapStateToPros)(PrivateRoute);

export default PrivateRouteContainer;
