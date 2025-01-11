import React from "react";
import Reports from "../components/Reports/Reports";

const ReportsPage = () => {
  const mockInventory = [
    { name: "Product 1", quantity: 10 },
    { name: "Product 2", quantity: 5 },
  ];
  const mockOrders = [
    { customerName: "Customer 1", items: ["Product 1", "Product 2"] },
    { customerName: "Customer 2", items: ["Product 1"] },
  ];

  return (
    <div>
      <Reports inventory={mockInventory} orders={mockOrders} />
    </div>
  );
};

export default ReportsPage;
