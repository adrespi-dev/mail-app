import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute: React.FC<any> = ({ children, rest, currentUser }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser ? (
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
  const { currentUser } = state;
  return {
    currentUser,
  };
};
const PrivateRouteContainer = connect(mapStateToPros)(PrivateRoute);

export default PrivateRouteContainer;
