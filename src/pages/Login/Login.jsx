import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if email and password are valid
    if (email && password) {
      // Set authentication status in localStorage (or you can use sessionStorage)
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard'); // Redirect to dashboard
    } else {
      alert("Please enter valid email and password.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Login - Your App</title>
        <meta name="description" content="Login to access your dashboard." />
        <meta name="keywords" content="login, user, authentication" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
              placeholder="Enter your password"
            />
          </div>
          <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Login
            </button>
        </form>
        </div>
      </div>
    </>
  );
};

export default Login;
