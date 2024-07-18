// src/components/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import expenseImage from '../assets/image3.png';
import analyticsImage from '../assets/image2.jpg';
import uploadImage from '../assets/image1.png';
import './new_App.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Handle login logic here
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 via-blue-300 to-indigo-400 p-4">
      <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-2xl w-full text-center mb-8 transition-transform transform hover:scale-105">
        <h1 className="text-5xl font-extrabold mb-6 text-gray-800 animate-bounce">Welcome to Expense Tracker</h1>
        <p className="text-gray-600 mb-10 text-lg">
          Track your expenses easily with our app. Upload your expenses, and get detailed analytics on your spending habits.
        </p>
        <button 
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-12 py-4 rounded-full text-2xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-110"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>

      <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-4xl w-full text-center transition-transform transform hover:scale-105">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">How to Use the App</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center">
            <img src={expenseImage} alt="Upload Expenses" className="w-40 h-40 object-cover rounded-full mb-6 shadow-xl transition-transform transform hover:scale-110" />
            <h3 className="text-2xl font-semibold mb-4">Upload Expenses</h3>
            <p className="text-gray-600">Easily upload your expenses by selecting a file from your device.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={analyticsImage} alt="View Analytics" className="w-40 h-40 object-cover rounded-full mb-6 shadow-xl transition-transform transform hover:scale-110" />
            <h3 className="text-2xl font-semibold mb-4">View Analytics</h3>
            <p className="text-gray-600">Get detailed insights into your spending habits with our analytics tools.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={uploadImage} alt="Manage Finances" className="w-40 h-40 object-cover rounded-full mb-6 shadow-xl transition-transform transform hover:scale-110" />
            <h3 className="text-2xl font-semibold mb-4">Manage Finances</h3>
            <p className="text-gray-600">Keep track of your finances and manage your budget effectively.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
