import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Shared/Sidebar';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';

const Inventory = () => {
  const [inventory, setInventory] = useState([
    {
      id: 1,
      name: "Laptop",
      sku: "SKU-1",
      category: "Electronics",
      quantity: 10,
      reorderLevel: 10,
      unitPrice: 800,
      supplier: "Tech Supplier Inc.",
      action: "Restock",
      dateAdded: "2025-01-01",
    },
    {
      id: 2,
      name: "Desk Chair",
      sku: "SKU-2",
      category: "Furniture",
      quantity: 15,
      reorderLevel: 3,
      unitPrice: 120,
      supplier: "Office Essentials Co.",
      action: "Monitor",
      dateAdded: "2025-01-02",
    },
    {
      id: 3,
      name: "Printer",
      sku: "SKU-3",
      category: "Electronics",
      quantity: 5,
      reorderLevel: 2,
      unitPrice: 200,
      supplier: "Print Solutions Ltd.",
      action: "Restock",
      dateAdded: "2025-01-03",
    },
    {
      id: 4,
      name: "Coffee Machine",
      sku: "SKU-4",
      category: "Appliances",
      quantity: 7,
      reorderLevel: 7,
      unitPrice: 150,
      supplier: "Kitchen Supply Co.",
      action: "Monitor",
      dateAdded: "2025-01-04",
    },
    {
      id: 5,
      name: "Whiteboard",
      sku: "SKU-5",
      category: "Stationery",
      quantity: 20,
      reorderLevel: 9,
      unitPrice: 50,
      supplier: "Office Supplies Ltd.",
      action: "Monitor",
      dateAdded: "2025-01-05",
    },
    {
      id: 6,
      name: "Projector",
      sku: "SKU-6",
      category: "Electronics",
      quantity: 8,
      reorderLevel: 3,
      unitPrice: 600,
      supplier: "Tech Supplier Inc.",
      action: "Monitor",
      dateAdded: "2025-01-06",
    },
    {
      id: 7,
      name: "Dell-5400",
      sku: "SKU-7",
      category: "Electronics",
      quantity: 10,
      reorderLevel: 3,
      unitPrice: 500,
      supplier: "Tech Supplier Inc.",
      action: "Monitor",
      dateAdded: "2025-01-06"
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editItemId, setEditItemId] = useState(null);
  const [newItem, setNewItem] = useState({
    name: '',
    category: '',
    quantity: 0,
    reorderLevel: 0,
    unitPrice: 0,
    supplier: '',
    action: '',
    dateAdded: '',
  });
  const [showAlerts, setShowAlerts] = useState(false); // Track whether alerts should be shown

  useEffect(() => {
    const storedInventory = JSON.parse(localStorage.getItem('inventory')) || [];
    setInventory(storedInventory);
  }, []);

  useEffect(() => {
    localStorage.setItem('inventory', JSON.stringify(inventory));
  }, [inventory]);

  const handleAddItem = () => {
    const sku = `SKU-${inventory.length + 1}`;
    const dateAdded = new Date().toISOString().split('T')[0];

    if (isEditing) {
      setInventory(
        inventory.map((item) =>
          item.id === editItemId ? { ...item, ...newItem, dateAdded } : item
        )
      );
      setIsEditing(false);
      setEditItemId(null);
    } else {
      setInventory([ 
        ...inventory, 
        { 
          ...newItem, 
          id: Date.now(), 
          sku, 
          dateAdded 
        }
      ]);
    }

    setIsModalOpen(false);
    setNewItem({
      name: '',
      category: '',
      quantity: 0,
      reorderLevel: 0,
      unitPrice: 0,
      supplier: '',
      action: '',
      dateAdded: '',
    });
  };

  const handleEdit = (id) => {
    const itemToEdit = inventory.find((item) => item.id === id);
    setNewItem(itemToEdit);
    setEditItemId(id);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  const handleShowAlerts = () => {
    setShowAlerts(!showAlerts); // Toggle the alert visibility
  };

  // Filter inventory to show only items with reorder level less than 6
  const filteredInventory = showAlerts
    ? inventory.filter((item) => item.reorderLevel < 6)
    : inventory;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1 flex-col lg:flex-row">
        <Sidebar className="lg:w-1/4" />
        <div className="flex-1 p-4 sm:p-6 bg-gray-100">
          <h1 className="text-xl sm:text-3xl font-bold mb-6">Inventory</h1>
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={handleShowAlerts}
              className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600"
            >
              {showAlerts ? 'Show All Items' : 'Show Alerts'}
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
            >
              {isEditing ? 'Edit Item' : 'Add New Item'}
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
                  <th className="py-2 px-4 border-b">Action</th>
                  <th className="py-2 px-4 border-b">Date Added</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInventory.map((item) => (
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
                    <td className="py-2 px-4 border-b">{item.action}</td>
                    <td className="py-2 px-4 border-b">{item.dateAdded}</td>
                    <td className="py-2 px-4 border-b">
                      <button
                        onClick={() => handleEdit(item.id)}
                        className="text-blue-500"
                      >
                        Edit
                      </button>
                      {' | '}
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-500"
                      >
                        Delete
                      </button>
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
            <h2 className="text-xl font-semibold mb-4">
              {isEditing ? 'Edit Item' : 'Add New Item'}
            </h2>
            <form>
              <input
                type="text"
                placeholder="Item Name"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                className="mb-2 p-2 w-full border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Category"
                value={newItem.category}
                onChange={(e) =>
                  setNewItem({ ...newItem, category: e.target.value })
                }
                className="mb-2 p-2 w-full border border-gray-300 rounded"
              />
              <input
                type="number"
                placeholder="Quantity"
                value={newItem.quantity}
                onChange={(e) =>
                  setNewItem({ ...newItem, quantity: e.target.value })
                }
                className="mb-2 p-2 w-full border border-gray-300 rounded"
              />
              <input
                type="number"
                placeholder="Reorder Level"
                value={newItem.reorderLevel}
                onChange={(e) =>
                  setNewItem({ ...newItem, reorderLevel: e.target.value })
                }
                className="mb-2 p-2 w-full border border-gray-300 rounded"
              />
              <input
                type="number"
                placeholder="Unit Price"
                value={newItem.unitPrice}
                onChange={(e) =>
                  setNewItem({ ...newItem, unitPrice: e.target.value })
                }
                className="mb-2 p-2 w-full border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Supplier"
                value={newItem.supplier}
                onChange={(e) =>
                  setNewItem({ ...newItem, supplier: e.target.value })
                }
                className="mb-2 p-2 w-full border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Action"
                value={newItem.action}
                onChange={(e) =>
                  setNewItem({ ...newItem, action: e.target.value })
                }
                className="mb-2 p-2 w-full border border-gray-300 rounded"
              />
              <button
                type="button"
                onClick={handleAddItem}
                className="w-full py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
              >
                {isEditing ? 'Save Changes' : 'Add Item'}
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="mt-2 w-full py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Inventory;
