// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuthenticated, logout } from '../redux/userSlice';

const Navbar = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate to programmatically navigate

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-cyan-600/100 text-white text-xl p-5 font-sans font-bold">
      <div className="container mx-auto">
        <ul className="flex justify-end space-x-12">
          <li className='hover:text-orange-200 '>
            <Link to="/">Home</Link>
          </li>
          {isAuthenticated ? (
            <>
              <li className='hover:text-orange-200 '>
                <Link to="/beers">Beers</Link>
              </li>
              <li className='hover:text-red-600 '>
                <button onClick={handleLogout}>Log out</button>
              </li>
            </>
          ) : (
            <li className='hover:text-green-500 '>
              {/* Add the "Login" link */}
              <Link to="/login">Log in</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
