import React, { useState } from 'react';
import Sidebar from '../components/Shared/Sidebar';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newItem, setNewItem] = useState({
    name: '',
    category: '',
    quantity: 0,
    reorderLevel: 0,
    unitPrice: 0,
    supplier: '',
    dateAdded: '',
  });

  const handleAddItem = () => {
    const sku = `SKU-${inventory.length + 1}`;
    const dateAdded = new Date().toISOString().split('T')[0];

    setInventory([
      ...inventory,
      {
        ...newItem,
        id: Date.now(),
        sku,
        dateAdded,
      },
    ]);

    setIsModalOpen(false);
    setNewItem({
      name: '',
      category: '',
      quantity: 0,
      reorderLevel: 0,
      unitPrice: 0,
      supplier: '',
      dateAdded: '',
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-1 flex-col lg:flex-row">
        <Sidebar className="lg:w-1/4" />
        <div className="flex-1 p-4 sm:p-6 bg-gray-100">
          <h1 className="text-xl sm:text-3xl font-bold mb-6">Inventory</h1>
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
            >
              Add New Item
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Item Name</th>
                  <th className="py-2 px-4 border-b">SKU</th>
                  <th className="py-2 px-4 border-b">Category</th>
                  <th className="py-2 px-4 border-b">Quantity</th>
                  <th className="py-2 px-4 border-b">Reorder Level</th>
                  <th className="py-2 px-4 border-b">Unit Price</th>
                  <th className="py-2 px-4 border-b">Total Value</th>
                  <th className="py-2 px-4 border-b">Supplier</th>
                  <th className="py-2 px-4 border-b">Date Added</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item) => (
                  <tr key={item.id}>
                    <td className="py-2 px-4 border-b">{item.name}</td>
                    <td className="py-2 px-4 border-b">{item.sku}</td>
                    <td className="py-2 px-4 border-b">{item.category}</td>
                    <td className="py-2 px-4 border-b">{item.quantity}</td>
                    <td className="py-2 px-4 border-b">{item.reorderLevel}</td>
                    <td className="py-2 px-4 border-b">${item.unitPrice}</td>
                    <td className="py-2 px-4 border-b">
                      ${item.quantity * item.unitPrice}
                    </td>
                    <td className="py-2 px-4 border-b">{item.supplier}</td>
                    <td className="py-2 px-4 border-b">{item.dateAdded}</td>
                    <td className="py-2 px-4 border-b">
                      <button className="text-blue-500">Edit</button> |
                      <button className="text-red-500 ml-2">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h2 className="text-xl font-bold mb-4">Add New Item</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddItem();
              }}
            >
              {[
                { label: 'Item Name', value: 'name' },
                { label: 'Category', value: 'category' },
                { label: 'Quantity', value: 'quantity', type: 'number' },
                { label: 'Reorder Level', value: 'reorderLevel', type: 'number' },
                { label: 'Unit Price', value: 'unitPrice', type: 'number' },
                { label: 'Supplier', value: 'supplier' },
              ].map(({ label, value, type = 'text' }) => (
                <div className="mb-4" key={value}>
                  <label className="block mb-1 font-semibold">{label}</label>
                  <input
                    type={type}
                    value={newItem[value]}
                    onChange={(e) =>
                      setNewItem({ ...newItem, [value]: type === 'number' ? parseFloat(e.target.value) : e.target.value })
                    }
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    required
                  />
                </div>
              ))}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Add Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Inventory;
