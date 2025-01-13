import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import Navbar from '../components/Shared/Navbar'; // Navbar component
import Footer from '../components/Shared/Footer'; // Footer component

// Import images from the components' image folder
import ims1 from '../components/images/ims1.webp';
import ims2 from '../components/images/ims2.png';

const HeroPage = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Hero Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Title */}
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-wide">
            Welcome to <span className="text-yellow-300">Inventory Management System</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Simplify your inventory operations with cutting-edge features for real-time tracking and management.
          </p>

          {/* Images Section */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="relative group">
              <img
                src={ims1}  // Use the imported image here
                alt="System Overview"
                className="w-full h-auto object-cover rounded-lg shadow-xl transition-transform transform group-hover:scale-105"
              />
              <p className="mt-3 text-sm text-gray-300">Effortless System Overview</p>
            </div>
            <div className="relative group">
              <img
                src={ims2}  // Use the imported image here
                alt="Dashboard Preview"
                className="w-full h-auto object-cover rounded-lg shadow-xl transition-transform transform group-hover:scale-105"
              />
              <p className="mt-3 text-sm text-gray-300">Streamlined Design</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16">
            <p className="text-lg sm:text-xl font-medium text-gray-200">
              Ready to optimize your inventory? Start today.
            </p>
            <Link
              to="/dashboard"
              className="mt-6 inline-flex items-center px-8 py-4 bg-yellow-400 text-blue-900 font-semibold rounded-full shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all transform focus:ring-4 focus:ring-yellow-200"
            >
              Get Started <IoIosArrowForward className="ml-2 text-2xl" />
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-16 left-10 w-72 h-72 bg-yellow-300 rounded-full opacity-20 blur-3xl"
        ></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-700 rounded-full opacity-30 blur-2xl"
        ></div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HeroPage;
