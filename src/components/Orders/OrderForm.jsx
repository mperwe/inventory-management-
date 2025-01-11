import React, { useState } from "react";

const OrderForm = ({ onAddOrder }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    items: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemsArray = formData.items.split(",").map((item) => item.trim());
    onAddOrder({ customerName: formData.customerName, items: itemsArray });
    setFormData({ customerName: "", items: "" });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block">Customer Name</label>
        <input
          type="text"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label className="block">Items (comma-separated)</label>
        <input
          type="text"
          name="items"
          value={formData.items}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add Order
      </button>
    </form>
  );
};

export default OrderForm;
