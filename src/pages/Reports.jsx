import React from 'react';
import Sidebar from '../components/Shared/Sidebar';

const Reports = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Reports</h1>
        <p>Generate and view detailed reports for your inventory, sales, and orders.</p>
      </div>
    </div>
  );
};

export default Reports;
