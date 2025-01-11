import React, { useState } from "react";
import InventoryForm from "../components/Inventory/InventoryForm";
import InventoryList from "../components/Inventory/InventoryList";

const InventoryPage = () => {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Inventory Management</h1>
      <InventoryForm onAddProduct={handleAddProduct} />
      <InventoryList products={products} />
    </div>
  );
};

export default InventoryPage;
