import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <p className="text-white text-center">© {new Date().getFullYear()} Beer App</p>
      </div>
    </footer>
  );
};

export default Footer;
