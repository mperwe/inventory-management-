import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          Inventory Management
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-blue-200">Home</Link>
          <Link to="/login" className="text-white hover:text-blue-200">Login</Link>
          <Link to="/signup" className="text-white hover:text-blue-200">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
