// src/pages/HeroPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const HeroPage = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 bg-opacity-50 bg-cover bg-center" style={{ backgroundImage: "url('your-hero-image-url.jpg')" }}></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">Welcome to Our Platform</h1>
          <p className="mt-4 text-xl">Manage your inventory, orders, and reports all in one place.</p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/login"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
