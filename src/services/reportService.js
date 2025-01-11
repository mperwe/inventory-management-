export const generateInventoryReport = (inventory) => {
    return {
      totalItems: inventory.length,
      lowStock: inventory.filter((item) => item.quantity < 5),
    };
  };
  
  export const generateOrderReport = (orders) => {
    return {
      totalOrders: orders.length,
      topCustomers: [...new Set(orders.map((order) => order.customerName))],
    };
  };
  