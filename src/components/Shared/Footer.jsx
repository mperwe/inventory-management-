import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-indigo-700 py-6 text-gray-200">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Inventory Management System. All Rights Reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-yellow-300">Privacy Policy</a>
          <a href="#" className="hover:text-yellow-300">Terms of Service</a>
          <a href="#" className="hover:text-yellow-300">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
