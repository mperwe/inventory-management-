import React from "react";

const Reports = ({ inventory, orders }) => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Reports</h2>
      <div className="mb-4">
        <h3 className="font-bold">Inventory Report</h3>
        <p>Total Products: {inventory.length}</p>
      </div>
      <div>
        <h3 className="font-bold">Order Report</h3>
        <p>Total Orders: {orders.length}</p>
      </div>
    </div>
  );
};

export default Reports;
