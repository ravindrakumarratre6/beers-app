// src/components/Login.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <div className="min-h-full bg-gray-100">
      <div className="h-96 flex justify-center items-center content-center bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Login Page</h1>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
