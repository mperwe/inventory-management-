import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Left Section */}
          <div className="text-sm">
            <p>&copy; {new Date().getFullYear()} Inventory Management System. All rights reserved.</p>
          </div>

          {/* Right Section */}
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
