import React from 'react';
import { Navigate } from 'react-router-dom';

const Auth = (WrappedComponent) => {
  const token = localStorage.getItem('token');
  const isLoggedIn = !!token;

  return (props) => {
    if (isLoggedIn) {
      return <WrappedComponent {...props} />;
    } else {
      return <Navigate to="/login" replace={true} />;
    }
  };
};

export default Auth;