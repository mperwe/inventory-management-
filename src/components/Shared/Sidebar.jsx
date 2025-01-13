import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 p-4">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <ul>
        <li>
          <Link to="/dashboard" className="hover:bg-gray-700 p-2 rounded block">Dashboard</Link>
        </li>
        <li>
          <Link to="/inventory" className="hover:bg-gray-700 p-2 rounded block">Inventory</Link>
        </li>
        <li>
          <Link to="/orders" className="hover:bg-gray-700 p-2 rounded block">Orders</Link>
        </li>
        <li>
          <Link to="/reports" className="hover:bg-gray-700 p-2 rounded block">Reports</Link>
        </li>
        <li>
          <Link to="/suppliers" className="hover:bg-gray-700 p-2 rounded block">Suppliers</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
