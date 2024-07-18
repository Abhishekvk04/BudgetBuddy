// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 text-white shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Expense Tracker</h1>
            <nav>
              <Link to="/" className="mr-4 hover:text-gray-200">Home</Link>
              <Link to="/dashboard" className="hover:text-gray-200">Dashboard</Link>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
