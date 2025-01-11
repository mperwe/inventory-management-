export const fetchOrders = async () => {
    // Simulate fetching orders from an API
    return [
      { id: 1, customerName: "John Doe", items: ["Product A", "Product B"] },
      { id: 2, customerName: "Jane Smith", items: ["Product C"] },
    ];
  };
  
  export const createOrder = async (order) => {
    // Simulate creating an order
    console.log("Order created:", order);
    return order;
  };
  