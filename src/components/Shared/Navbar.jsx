import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-2xl">
          <Link to="/">IMS</Link> {/* IMS = Inventory Management System */}
        </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link to="/" className="text-gray-300 hover:text-white transition-all">
            Home
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition-all">
            About
          </Link>
          <Link to="/features" className="text-gray-300 hover:text-white transition-all">
            Features
          </Link>
          <Link to="/login" className="text-yellow-400 hover:text-yellow-300 transition-all">
            Login
          </Link>
          <Link
            to="/signup"
            className="text-gray-300 hover:bg-yellow-400 hover:text-gray-900 px-4 py-2 rounded transition-all"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
