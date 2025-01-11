import React, { useState } from "react";
import OrderForm from "../components/Orders/OrderForm";
import OrderList from "../components/Orders/OrderList";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  const handleAddOrder = (order) => {
    setOrders([...orders, order]);
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Order Management</h1>
      <OrderForm onAddOrder={handleAddOrder} />
      <OrderList orders={orders} />
    </div>
  );
};

export default OrdersPage;
