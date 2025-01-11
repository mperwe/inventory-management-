import React from "react";

const StockAlerts = ({ inventory }) => {
  const lowStockItems = inventory.filter((item) => item.quantity < 5);

  return (
    <div>
      <h3 className="font-bold">Stock Alerts</h3>
      {lowStockItems.length > 0 ? (
        <ul>
          {lowStockItems.map((item, index) => (
            <li key={index} className="text-red-500">
              {item.name} is running low: {item.quantity} units left
            </li>
          ))}
        </ul>
      ) : (
        <p>No low stock alerts.</p>
      )}
    </div>
  );
};

export default StockAlerts;
