// src/components/AuthenticatedContent.js
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../redux/userSlice';

const AuthenticatedContent = ({ children }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return isAuthenticated ? children : <p>Please log in to view this content.</p>;
};

export default AuthenticatedContent;
