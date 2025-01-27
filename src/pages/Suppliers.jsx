import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Shared/Sidebar';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [newSupplier, setNewSupplier] = useState({
    name: '',
    contact: '',
    products: '',
  });
  const [showForm, setShowForm] = useState(false);

  // Load suppliers from local storage or use dummy data
  useEffect(() => {
    const storedSuppliers = JSON.parse(localStorage.getItem('suppliers')) || [
      {
        id: 1,
        name: 'ABC Supplies',
        contact: 'abc@example.com',
        products: ['Laptops', 'Keyboards'],
      },
      {
        id: 2,
        name: 'XYZ Distributors',
        contact: 'xyz@example.com',
        products: ['Monitors', 'Printers'],
      },
      {
        id: 3,
        name: 'Tech Solutions',
        contact: 'tech@example.com',
        products: ['Cables', 'Adapters'],
      },
      {
        id: 4,
        name: 'Quality Goods',
        contact: 'quality@example.com',
        products: ['Routers', 'Switches'],
      },
      {
        id: 5,
        name: 'Best Supplies',
        contact: 'best@example.com',
        products: ['Desks', 'Chairs'],
      },
    ];
    setSuppliers(storedSuppliers);
  }, []);

  // Save suppliers to local storage whenever suppliers state changes
  useEffect(() => {
    localStorage.setItem('suppliers', JSON.stringify(suppliers));
  }, [suppliers]);

  // Add a new supplier
  const addSupplier = () => {
    if (!newSupplier.name || !newSupplier.contact || !newSupplier.products) {
      alert('Please fill in all fields.');
      return;
    }

    const newEntry = {
      id: Date.now(),
      name: newSupplier.name,
      contact: newSupplier.contact,
      products: newSupplier.products.split(',').map((p) => p.trim()),
    };

    setSuppliers([...suppliers, newEntry]);
    setNewSupplier({ name: '', contact: '', products: '' });
    setShowForm(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">Suppliers</h1>

          {/* Add Supplier Button */}
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-4"
          >
            {showForm ? 'Close Form' : 'Add Supplier'}
          </button>

          {/* Add Supplier Form */}
          {showForm && (
            <div className="mb-6 bg-gray-100 p-4 rounded">
              <h2 className="text-lg font-bold mb-4">Add New Supplier</h2>
              <div className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Supplier Name"
                  value={newSupplier.name}
                  onChange={(e) => setNewSupplier({ ...newSupplier, name: e.target.value })}
                  className="border px-2 py-1"
                />
                <input
                  type="text"
                  placeholder="Contact"
                  value={newSupplier.contact}
                  onChange={(e) => setNewSupplier({ ...newSupplier, contact: e.target.value })}
                  className="border px-2 py-1"
                />
                <input
                  type="text"
                  placeholder="Products (comma-separated)"
                  value={newSupplier.products}
                  onChange={(e) => setNewSupplier({ ...newSupplier, products: e.target.value })}
                  className="border px-2 py-1"
                />
                <button
                  onClick={addSupplier}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add Supplier
                </button>
              </div>
            </div>
          )}

          {/* Suppliers Table */}
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Supplier Name</th>
                <th className="py-2 px-4 border-b">Contact</th>
                <th className="py-2 px-4 border-b">Products</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {suppliers.length > 0 ? (
                suppliers.map((supplier) => (
                  <tr key={supplier.id}>
                    <td className="py-2 px-4 border-b">{supplier.name}</td>
                    <td className="py-2 px-4 border-b">{supplier.contact}</td>
                    <td className="py-2 px-4 border-b">{supplier.products.join(', ')}</td>
                    <td className="py-2 px-4 border-b">
                      <button
                        onClick={() =>
                          setSuppliers(suppliers.filter((s) => s.id !== supplier.id))
                        }
                        className="text-red-500"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-2 px-4 text-center">
                    No suppliers found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Suppliers;
