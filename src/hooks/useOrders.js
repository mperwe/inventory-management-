import { useState } from "react";

const useOrders = () => {
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  const removeOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  return {
    orders,
    addOrder,
    removeOrder,
  };
};

export default useOrders;
