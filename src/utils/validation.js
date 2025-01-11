export const validateInventoryItem = (item) => {
    if (!item.name || item.quantity < 0) {
      return false;
    }
    return true;
  };
  
  export const validateOrder = (order) => {
    if (!order.customerName || order.items.length === 0) {
      return false;
    }
    return true;
  };
  