import React from "react";

const InventoryDetails = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="font-bold">Details</h3>
      <p>
        <strong>Name:</strong> {product.name}
      </p>
      <p>
        <strong>Quantity:</strong> {product.quantity}
      </p>
    </div>
  );
};

export default InventoryDetails;
