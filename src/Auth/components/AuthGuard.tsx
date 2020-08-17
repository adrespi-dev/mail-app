import { Redirect } from 'react-router-dom';
import React from 'react';
import Auth from './Auth';

const AuthGuard: React.FC<any> = (props) => {
  const { currentUser } = props;
  console.log(currentUser);
  if (currentUser) {
    return <Redirect to="/app"></Redirect>;
  } else {
    return <Auth {...props}></Auth>;
  }
};

export default AuthGuard;
