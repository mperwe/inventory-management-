import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Shared/Navbar"; // Assuming you have a Navbar component
import Footer from "./components/Shared/Footer"; // Assuming you have a Footer component
import HeroPage from "./pages/HeroPage";  // Landing Page before login
import Login from "./components/Auth/Login"; // Login Page
import Signup from "./components/Auth/SignUp"; // Signup Page
import Dashboard from "../src/pages/Dashboard"; // Main authenticated page
import InventoryPage from "./pages/InventoryPage";
import OrdersPage from "./pages/OrdersPage";
import ReportsPage from "./pages/ReportsPage";
import UserRolesPage from "./pages/UserRolesPage";
import MobilePage from "./pages/MobilePage";
import ProtectedRoute from "./pages/ProtectedRoute"; // Protected route logic

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HeroPage />} /> {/* HeroPage for all users */}
          <Route path="/login" element={<Login />} /> {/* Login page */}
          <Route path="/signup" element={<Signup />} /> {/* Signup page */}

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/inventory"
            element={
              <ProtectedRoute>
                <InventoryPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <OrdersPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reports"
            element={
              <ProtectedRoute>
                <ReportsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user-roles"
            element={
              <ProtectedRoute>
                <UserRolesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mobile"
            element={
              <ProtectedRoute>
                <MobilePage />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer /> {/* Footer always at the bottom */}
      </div>
    </Router>
  );
};

export default App;
