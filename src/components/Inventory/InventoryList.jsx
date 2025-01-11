import React from "react";

const InventoryList = ({ products }) => {
  return (
    <div>
      {products.length > 0 ? (
        <ul>
          {products.map((product, index) => (
            <li key={index} className="border-b py-2">
              <strong>{product.name}</strong> - {product.quantity} units
            </li>
          ))}
        </ul>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default InventoryList;
