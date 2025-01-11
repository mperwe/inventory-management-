import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 px-8">
      <ul className="flex space-x-6">
        {/* Home link to HeroPage */}
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        {/* Protected Routes */}
        <li>
          <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/inventory" className="hover:underline">
            Inventory
          </Link>
        </li>
        <li>
          <Link to="/orders" className="hover:underline">
            Orders
          </Link>
        </li>
        <li>
          <Link to="/reports" className="hover:underline">
            Reports
          </Link>
        </li>
        <li>
          <Link to="/user-roles" className="hover:underline">
            User Roles
          </Link>
        </li>
        <li>
          <Link to="/mobile" className="hover:underline">
            Mobile
          </Link>
        </li>
        {/* Login link */}
        <li>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
