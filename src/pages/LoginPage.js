// src/pages/LoginPage.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
