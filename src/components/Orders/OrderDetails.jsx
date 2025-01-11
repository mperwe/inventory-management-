import React from "react";

const OrderDetails = ({ order }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="font-bold">Order Details</h3>
      <p>
        <strong>Customer Name:</strong> {order.customerName}
      </p>
      <p>
        <strong>Items:</strong> {order.items.join(", ")}
      </p>
    </div>
  );
};

export default OrderDetails;
