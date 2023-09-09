// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { store } from './redux/store';
import LoginPage from './components/Login';
import Beers from './pages/Beers';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import { Navigate } from 'react-router-dom';
function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Home />} />
          {/* Use the Outlet component to render nested routes */}
          <Route
            path="/beers"
            element={
              isAuthenticated ? (
                <Beers /> // This allows nested routes to be rendered
              ) : (
                <Navigate to="/login" /> // Redirect to login if not authenticated
              )
            }
          />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
