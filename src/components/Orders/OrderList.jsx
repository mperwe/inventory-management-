import React from "react";

const OrderList = ({ orders }) => {
  return (
    <div>
      {orders.length > 0 ? (
        <ul>
          {orders.map((order, index) => (
            <li key={index} className="border-b py-2">
              <strong>Order #{index + 1}</strong>: {order.customerName} - {order.items.length} items
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders available.</p>
      )}
    </div>
  );
};

export default OrderList;
