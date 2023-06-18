import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const withAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const shouldRender = useRef(false);

    if (!token) {
      navigate('/login');
    }

    const decoded = jwt_decode(token);
    const role = decoded.role;

    if (role !== 'admin') {
      navigate('/login');
    } else {
      shouldRender.current = true;
    }

    useEffect(() => {
      if (!shouldRender.current) {
        navigate('/login');
      }
    }, [navigate]);

    return shouldRender.current ? <Component {...props} /> : null;
  };

  return AuthenticatedComponent;
};

export default withAuth;