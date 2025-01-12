import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Shared/Sidebar';
import { getInventory } from '../services/inventoryService';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';

const Inventory = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      const data = await getInventory();
      setInventory(data);
    };
    fetchInventory();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-100">
          <h1 className="text-3xl font-bold mb-6">Inventory</h1>
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Item Name</th>
                <th className="py-2 px-4 border-b">Quantity</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map(item => (
                <tr key={item.id}>
                  <td className="py-2 px-4 border-b">{item.name}</td>
                  <td className="py-2 px-4 border-b">{item.quantity}</td>
                  <td className="py-2 px-4 border-b">${item.price}</td>
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Inventory;
