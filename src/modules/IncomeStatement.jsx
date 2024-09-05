import React, { useState, useEffect } from 'react';

const IncomeStatement = () => {
  const [incomeItems, setIncomeItems] = useState({
    realizedGains: 0,
    unrealizedGains: 0,
    interestIncome: 0,
    managementFees: 0,
    operatingExpenses: 0,
    carriedInterest: 0
  });

  const [netIncome, setNetIncome] = useState(0);

  useEffect(() => {
    const totalRevenue = incomeItems.realizedGains + incomeItems.unrealizedGains + incomeItems.interestIncome;
    const totalExpenses = incomeItems.managementFees + incomeItems.operatingExpenses + incomeItems.carriedInterest;
    setNetIncome(totalRevenue - totalExpenses);
  }, [incomeItems]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncomeItems(prev => ({...prev, [name]: parseFloat(value) || 0}));
  };

  return (
    <div>
      <h2>PE Fund Income Statement</h2>
      <p>Enter values (in thousands) to see how they affect the net income:</p>

      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <h3>Revenue</h3>
          <div>
            <label>Realized Gains: </label>
            <input type="number" name="realizedGains" value={incomeItems.realizedGains} onChange={handleChange} />
          </div>
          <div>
            <label>Unrealized Gains: </label>
            <input type="number" name="unrealizedGains" value={incomeItems.unrealizedGains} onChange={handleChange} />
          </div>
          <div>
            <label>Interest Income: </label>
            <input type="number" name="interestIncome" value={incomeItems.interestIncome} onChange={handleChange} />
          </div>
        </div>

        <div>
          <h3>Expenses</h3>
          <div>
            <label>Management Fees: </label>
            <input type="number" name="managementFees" value={incomeItems.managementFees} onChange={handleChange} />
          </div>
          <div>
            <label>Operating Expenses: </label>
            <input type="number" name="operatingExpenses" value={incomeItems.operatingExpenses} onChange={handleChange} />
          </div>
          <div>
            <label>Carried Interest: </label>
            <input type="number" name="carriedInterest" value={incomeItems.carriedInterest} onChange={handleChange} />
          </div>
        </div>
      </div>

      <h3>Net Income: ${netIncome.toFixed(2)} thousand</h3>
    </div>
  );
};

export default IncomeStatement;