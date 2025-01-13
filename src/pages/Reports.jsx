import React from 'react';
import Sidebar from '../components/Shared/Sidebar';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';

const Reports = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">Reports</h1>
          <p>Generate and view detailed reports for your inventory, sales, and orders.</p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Reports;
