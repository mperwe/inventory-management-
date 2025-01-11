import { useState } from "react";

const useInventory = () => {
  const [inventory, setInventory] = useState([]);

  const addInventoryItem = (item) => {
    setInventory([...inventory, item]);
  };

  const removeInventoryItem = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  const updateInventoryItem = (id, updatedItem) => {
    setInventory(
      inventory.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };

  return {
    inventory,
    addInventoryItem,
    removeInventoryItem,
    updateInventoryItem,
  };
};

export default useInventory;
