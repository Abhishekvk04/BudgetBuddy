import React, { useState } from 'react';
import './dash_App.css';

function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [monthlySpending, setMonthlySpending] = useState(0);
  const [yearlySpending, setYearlySpending] = useState(0);

  const handleAddExpense = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const date = formData.get('date');
    const purpose = formData.get('purpose');
    const amount = formData.get('amount');

    try {
      const response = await fetch('/api/series', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date, purpose, amount }),
      });
      const data = await response.json();
      setExpenses([...expenses, data.series]); // Assuming data.series contains the added expense
      updateAnalytics(); // Update analytics after adding expense
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  const updateAnalytics = async () => {
    try {
      const monthlyResponse = await fetch('/api/monthlySpending');
      const monthlyData = await monthlyResponse.json();
      setMonthlySpending(monthlyData.total);

      const yearlyResponse = await fetch('/api/yearlySpending');
      const yearlyData = await yearlyResponse.json();
      setYearlySpending(yearlyData.total);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
      <div className="bg-white shadow-md rounded p-4">
        <h3 className="text-xl font-semibold mb-2">Add Expense</h3>
        <form onSubmit={handleAddExpense} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label htmlFor="date" className="block text-lg font-semibold mb-2">
              Date
            </label>
            <input type="date" id="date" name="date" className="border border-gray-300 p-2 rounded-md w-full" />
          </div>
          <div>
            <label htmlFor="purpose" className="block text-lg font-semibold mb-2">
              Purpose
            </label>
            <input type="text" id="purpose" name="purpose" className="border border-gray-300 p-2 rounded-md w-full" />
          </div>
          <div>
            <label htmlFor="amount" className="block text-lg font-semibold mb-2">
              Amount (₹)
            </label>
            <input type="number" id="amount" name="amount" className="border border-gray-300 p-2 rounded-md w-full" />
          </div>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mt-4 col-span-3">
            Add Expense
          </button>
        </form>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Analytics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white shadow-md rounded p-4">
            <h4 className="text-lg font-semibold">Monthly Spending</h4>
            <p>${monthlySpending.toFixed(2)}</p>
          </div>
          <div className="bg-white shadow-md rounded p-4">
            <h4 className="text-lg font-semibold">Yearly Spending</h4>
            <p>${yearlySpending.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
