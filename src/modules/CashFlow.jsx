import React, { useState } from 'react';

const CashFlow = () => {
  const [cashFlows, setCashFlows] = useState({
    Operating: [],
    Investing: [],
    Financing: []
  });

  const [draggedItem, setDraggedItem] = useState(null);

  const cashFlowItems = [
    "Management fees received", "Expenses paid", 
    "Capital calls from LPs", "Distributions to LPs", 
    "Investments in portfolio companies", "Proceeds from exit of investments", 
    "Interest received", "Dividends paid"
  ];

  const handleDragStart = (item) => {
    setDraggedItem(item);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (category) => {
    setCashFlows(prev => ({
      ...prev,
      [category]: [...prev[category], draggedItem]
    }));
    setDraggedItem(null);
  };

  return (
    <div>
      <h2>PE Fund Cash Flow Statement</h2>
      <p>Categorize the cash flow items into the correct activities:</p>

      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        {Object.keys(cashFlows).map(category => (
          <div 
            key={category} 
            style={{border: '1px solid black', padding: '10px', minWidth: '200px'}}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(category)}
          >
            <h3>{category} Activities</h3>
            {cashFlows[category].map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        ))}
      </div>

      <div style={{marginTop: '20px'}}>
        <h3>Cash Flow Items:</h3>
        {cashFlowItems.map((item, index) => (
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

export default CashFlow;