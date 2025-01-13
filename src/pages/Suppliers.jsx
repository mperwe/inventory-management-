import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Shared/Sidebar';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';
import { getSuppliers } from '../services/supplierService';

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    const fetchSuppliers = async () => {
      const data = await getSuppliers();
      setSuppliers(data);
    };
    fetchSuppliers();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">Suppliers</h1>
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
              {suppliers.map(supplier => (
                <tr key={supplier.id}>
                  <td className="py-2 px-4 border-b">{supplier.name}</td>
                  <td className="py-2 px-4 border-b">{supplier.contact}</td>
                  <td className="py-2 px-4 border-b">{supplier.products.join(', ')}</td>
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

export default Suppliers;
