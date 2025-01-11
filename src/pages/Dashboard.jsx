import React from "react";
import StockAlerts from "../components/Alerts/StockAlerts";

const Dashboard = () => {
  const mockInventory = [
    { name: "Product 1", quantity: 10 },
    { name: "Product 2", quantity: 3 },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>
      <StockAlerts inventory={mockInventory} />
    </div>
  );
};

export default Dashboard;
