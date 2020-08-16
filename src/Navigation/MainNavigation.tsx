import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import AuthContainer from '../Auth/containers/AuthContainer';

const MainNavigation = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/app">
          <div>LOL</div>
        </PrivateRoute>
        <Route path="/auth">
          <AuthContainer></AuthContainer>
        </Route>
        <Redirect path="/" to="/app" exact></Redirect>
      </Switch>
    </Router>
  );
};

export default MainNavigation;
