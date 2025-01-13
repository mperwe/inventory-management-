import React from 'react';
import Sidebar from '../components/Shared/Sidebar';
import StockAlerts from '../components/Widgets/StockAlerts';
import BarcodeScanner from '../components/Widgets/BarcodeScanner';
import RealtimeTracking from '../components/Widgets/RealtimeTracking';
import MultiLocation from '../components/Widgets/MultiLocation';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StockAlerts />
          <BarcodeScanner />
          <RealtimeTracking />
          <MultiLocation />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
