import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";
import Dashboard from "./pages/Dashboard";
import InventoryPage from "./pages/InventoryPage";
import OrdersPage from "./pages/OrdersPage";
import ReportsPage from "./pages/ReportsPage";
import UserRolesPage from "./pages/UserRolesPage";
import MobilePage from "./pages/MobilePage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/user-roles" element={<UserRolesPage />} />
          <Route path="/mobile" element={<MobilePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
