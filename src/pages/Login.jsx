import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="flex justify-center items-center flex-1 bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center">Login</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button type="submit" className="w-full p-3 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Log in
            </button>
          </form>
          <p className="mt-4 text-center">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:text-blue-700">Sign up</Link>
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Login;
