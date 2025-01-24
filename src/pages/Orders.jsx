import React, { useState } from 'react';
import Sidebar from '../components/Shared/Sidebar';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customerName: 'John Doe',
      orderDate: '2025-01-15',
      products: 'Laptop',
      quantity: 1,
      totalValue: 1200,
      status: 'Paid',
      address: '123 Main St, Berlin',
      contact: '+49123456789',
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      orderDate: '2025-01-12',
      products: 'Smartphone',
      quantity: 2,
      totalValue: 800,
      status: 'Not Paid',
      address: '456 Oak St, Hamburg',
      contact: '+49198765432',
    },
    {
      id: 3,
      customerName: 'Mike Johnson',
      orderDate: '2025-01-10',
      products: 'Headphones',
      quantity: 5,
      totalValue: 500,
      status: 'Paid',
      address: '789 Pine St, Munich',
      contact: '+49123498765',
    },
    {
      id: 4,
      customerName: 'Emily Brown',
      orderDate: '2025-01-08',
      products: 'Keyboard',
      quantity: 3,
      totalValue: 300,
      status: 'Not Paid',
      address: '321 Maple St, Cologne',
      contact: '+49176543210',
    },
    {
      id: 5,
      customerName: 'Chris Wilson',
      orderDate: '2025-01-05',
      products: 'Monitor',
      quantity: 2,
      totalValue: 400,
      status: 'Paid',
      address: '654 Elm St, Frankfurt',
      contact: '+49187654321',
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    orderDate: '',
    products: '',
    quantity: '',
    totalValue: '',
    status: 'Not Paid',
    address: '',
    contact: '',
  });

  const handleAddOrder = () => {
    const newOrder = {
      id: orders.length + 1,
      ...formData,
    };
    setOrders([...orders, newOrder]);
    setShowModal(false);
    setFormData({
      customerName: '',
      orderDate: '',
      products: '',
      quantity: '',
      totalValue: '',
      status: 'Not Paid',
      address: '',
      contact: '',
    });
  };

  const handleDeleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-4 sm:p-6 bg-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Orders</h1>
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Order
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-200 rounded-lg text-sm text-left text-gray-600">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b">Order ID</th>
                  <th className="py-2 px-4 border-b">Customer</th>
                  <th className="py-2 px-4 border-b">Order Date</th>
                  <th className="py-2 px-4 border-b">Products</th>
                  <th className="py-2 px-4 border-b">Quantity</th>
                  <th className="py-2 px-4 border-b">Total Value</th>
                  <th className="py-2 px-4 border-b">Status</th>
                  <th className="py-2 px-4 border-b">Address</th>
                  <th className="py-2 px-4 border-b">Contact</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td className="py-2 px-4 border-b">{order.id}</td>
                    <td className="py-2 px-4 border-b">{order.customerName}</td>
                    <td className="py-2 px-4 border-b">{order.orderDate}</td>
                    <td className="py-2 px-4 border-b">{order.products}</td>
                    <td className="py-2 px-4 border-b">{order.quantity}</td>
                    <td className="py-2 px-4 border-b">{order.totalValue}</td>
                    <td className="py-2 px-4 border-b">{order.status}</td>
                    <td className="py-2 px-4 border-b">{order.address}</td>
                    <td className="py-2 px-4 border-b">{order.contact}</td>
                    <td className="py-2 px-4 border-b">
                      <button
                        onClick={() => handleDeleteOrder(order.id)}
                        className="text-red-500 hover:underline"
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
      <Footer />
    </div>
  );
};

export default Orders;
