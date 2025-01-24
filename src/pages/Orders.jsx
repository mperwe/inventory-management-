import React, { useState } from "react";
import Sidebar from "../components/Shared/Sidebar";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: "OD1",
      customerName: "John Doe",
      orderDate: "2025-01-20",
      products: "Laptop, Mouse",
      quantity: 2,
      totalValue: 1200,
      status: "Paid",
      address: "123 Main Street, Berlin",
      contact: "+491234567890",
    },
    {
      id: "OD2",
      customerName: "Jane Smith",
      orderDate: "2025-01-22",
      products: "Smartphone",
      quantity: 1,
      totalValue: 800,
      status: "Not Paid",
      address: "456 Elm Street, Hamburg",
      contact: "+491987654321",
    },
    {
      id: "OD3",
      customerName: "Alex Johnson",
      orderDate: "2025-01-19",
      products: "Monitor, Keyboard",
      quantity: 2,
      totalValue: 450,
      status: "Paid",
      address: "789 Pine Avenue, Munich",
      contact: "+491234098765",
    },
    {
      id: "OD4",
      customerName: "Emily Davis",
      orderDate: "2025-01-21",
      products: "Tablet",
      quantity: 1,
      totalValue: 350,
      status: "Not Paid",
      address: "101 Maple Road, Frankfurt",
      contact: "+4915678904321",
    },
    {
      id: "OD5",
      customerName: "Michael Brown",
      orderDate: "2025-01-18",
      products: "Headphones",
      quantity: 3,
      totalValue: 300,
      status: "Paid",
      address: "202 Oak Street, Stuttgart",
      contact: "+4918907654321",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    customerName: "",
    orderDate: "",
    products: "",
    quantity: "",
    totalValue: "",
    status: "Not Paid",
    address: "",
    contact: "",
  });

  const handleAddOrder = () => {
    const newOrder = {
      id: `OD${orders.length + 1}`,
      ...formData,
    };
    setOrders([...orders, newOrder]);
    setShowModal(false);
    setFormData({
      customerName: "",
      orderDate: "",
      products: "",
      quantity: "",
      totalValue: "",
      status: "Not Paid",
      address: "",
      contact: "",
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

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-bold mb-4">Add Order</h2>
            <div className="space-y-4">
              <label className="block">
                <span className="text-gray-600">Customer Name</span>
                <input
                  type="text"
                  value={formData.customerName}
                  onChange={(e) =>
                    setFormData({ ...formData, customerName: e.target.value })
                  }
                  className="p-2 border rounded w-full mt-1"
                  placeholder="Enter customer name"
                  required
                />
              </label>
              <label className="block">
                <span className="text-gray-600">Order Date</span>
                <input
                  type="date"
                  value={formData.orderDate}
                  onChange={(e) =>
                    setFormData({ ...formData, orderDate: e.target.value })
                  }
                  className="p-2 border rounded w-full mt-1"
                  required
                />
              </label>
              <label className="block">
                <span className="text-gray-600">Products</span>
                <input
                  type="text"
                  value={formData.products}
                  onChange={(e) =>
                    setFormData({ ...formData, products: e.target.value })
                  }
                  className="p-2 border rounded w-full mt-1"
                  placeholder="Enter product details"
                  required
                />
              </label>
              <label className="block">
                <span className="text-gray-600">Quantity</span>
                <input
                  type="number"
                  value={formData.quantity}
                  onChange={(e) =>
                    setFormData({ ...formData, quantity: e.target.value })
                  }
                  className="p-2 border rounded w-full mt-1"
                  placeholder="Enter quantity"
                  required
                />
              </label>
              <label className="block">
                <span className="text-gray-600">Total Value</span>
                <input
                  type="number"
                  value={formData.totalValue}
                  onChange={(e) =>
                    setFormData({ ...formData, totalValue: e.target.value })
                  }
                  className="p-2 border rounded w-full mt-1"
                  placeholder="Enter total value"
                  required
                />
              </label>
              <label className="block">
                <span className="text-gray-600">Status</span>
                <select
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value })
                  }
                  className="p-2 border rounded w-full mt-1"
                >
                  <option value="Not Paid">Not Paid</option>
                  <option value="Paid">Paid</option>
                </select>
              </label>
              <label className="block">
                <span className="text-gray-600">Address</span>
                <textarea
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="p-2 border rounded w-full mt-1"
                  placeholder="Enter address"
                  required
                />
              </label>
              <label className="block">
                <span className="text-gray-600">Contact</span>
                <input
                  type="text"
                  value={formData.contact}
                  onChange={(e) =>
                    setFormData({ ...formData, contact: e.target.value })
                  }
                  className="p-2 border rounded w-full mt-1"
                  placeholder="Enter contact details"
                  required
                />
              </label>
              <div className="flex justify-between mt-4">
                <button
                  onClick={handleAddOrder}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Add Order
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
