import React from 'react';
import Sidebar from '../components/Shared/Sidebar';
import StockAlerts from '../components/Widgets/StockAlerts';
import BarcodeScanner from '../components/Widgets/BarcodeScanner';
import RealtimeTracking from '../components/Widgets/RealtimeTracking';
import MultiLocation from '../components/Widgets/MultiLocation';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Dashboard Content */}
        <div className="flex-1 p-6 bg-gray-100">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Widgets */}
            <StockAlerts />
            <BarcodeScanner />
            <RealtimeTracking />
            <MultiLocation />
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
