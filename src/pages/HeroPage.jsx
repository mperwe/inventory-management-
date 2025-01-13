import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

const HeroPage = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight">
          Welcome to the <span className="text-yellow-400">Inventory Management System</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Simplify your inventory management with real-time tracking, insights, and alerts. 
          Designed for efficiency and optimized for results.
        </p>

        {/* Images Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="relative group">
            <img
              src="https://via.placeholder.com/500x300"
              alt="System overview"
              className="w-full h-auto object-cover rounded-lg shadow-xl transition-transform transform group-hover:scale-105"
            />
            <p className="mt-3 text-sm text-gray-300">Comprehensive System Overview</p>
          </div>
          <div className="relative group">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Dashboard preview"
              className="w-full h-auto object-cover rounded-lg shadow-xl transition-transform transform group-hover:scale-105"
            />
            <p className="mt-3 text-sm text-gray-300">User-Friendly Dashboard Preview</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <p className="text-lg sm:text-xl font-medium">
            Ready to take charge of your inventory? Start today.
          </p>
          <Link
            to="/dashboard"
            className="mt-6 inline-flex items-center px-8 py-4 bg-yellow-500 text-blue-800 font-semibold rounded-full shadow-lg hover:bg-yellow-400 hover:text-blue-900 transition-all transform hover:scale-105 focus:ring-4 focus:ring-yellow-300"
          >
            Get Started <IoIosArrowForward className="ml-2 text-2xl" />
          </Link>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-16 left-10 w-72 h-72 bg-yellow-400 rounded-full opacity-20 blur-3xl"
        ></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full opacity-30 blur-2xl"
        ></div>
      </div>
    </div>
  );
};

export default HeroPage;
