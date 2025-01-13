import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-2xl">
          <Link to="/">IMS</Link> 
        </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link to="/" className="text-gray-300 hover:text-white transition-all">
            Home
          </Link>
          <Link to="/" className="text-gray-300 hover:text-white transition-all">
            About
          </Link>
          <Link to="/" className="text-gray-300 hover:text-white transition-all">
            Features
          </Link>
          <Link to="/login" className="text-yellow-400 hover:text-yellow-300 transition-all">
            <b>Join Us</b>
          </Link>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
