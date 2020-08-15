import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Auth from '../Auth/components/Auth';
import PrivateRoute from './PrivateRoute';

const MainNavigation = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/app">
          <div>LOL</div>
        </PrivateRoute>
        <Route path="/auth">
          <Auth></Auth>
        </Route>
        <Redirect path="/" to="/app" exact></Redirect>
      </Switch>
    </Router>
  );
};

export default MainNavigation;
