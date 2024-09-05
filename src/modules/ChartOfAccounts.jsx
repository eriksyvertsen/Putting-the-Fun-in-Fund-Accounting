import React, { useState } from 'react';

const ChartOfAccounts = () => {
  const [accounts, setAccounts] = useState({
    Assets: [],
    Liabilities: [],
    PartnersCapital: [],
    Income: [],
    Expenses: []
  });

  const [draggedItem, setDraggedItem] = useState(null);

  const accountItems = [
    "Cash", "Investments", "Management Fees Receivable", 
    "Accrued Expenses", "Carried Interest Payable", 
    "LP Contributions", "GP Contributions", 
    "Realized Gains", "Interest Income", 
    "Management Fees Expense", "Legal Fees"
  ];

  const handleDragStart = (item) => {
    setDraggedItem(item);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (category) => {
    setAccounts(prev => ({
      ...prev,
      [category]: [...prev[category], draggedItem]
    }));
    setDraggedItem(null);
  };

  return (
    <div>
      <h2>Chart of Accounts for a PE Fund</h2>
      <p>Drag and drop the accounts into the correct categories:</p>

      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        {Object.keys(accounts).map(category => (
          <div 
            key={category} 
            style={{border: '1px solid black', padding: '10px', minWidth: '150px'}}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(category)}
          >
            <h3>{category}</h3>
            {accounts[category].map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        ))}
      </div>

      <div style={{marginTop: '20px'}}>
        <h3>Available Accounts:</h3>
        {accountItems.map((item, index) => (
          <span 
            key={index} 
            draggable 
            onDragStart={() => handleDragStart(item)}
            style={{margin: '5px', padding: '5px', border: '1px solid gray', display: 'inline-block'}}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ChartOfAccounts;