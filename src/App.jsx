// App.jsx
import React, { useState } from 'react';
import Introduction from './modules/Introduction.jsx';
import ChartOfAccounts from './modules/ChartOfAccounts.jsx';
import BalanceSheet from './modules/BalanceSheet.jsx';
import IncomeStatement from './modules/IncomeStatement.jsx';
import CashFlow from './modules/CashFlow.jsx';

const App = () => {
  const [currentModule, setCurrentModule] = useState(0);

  const modules = [
    { name: "Introduction to PE Fund Accounting", component: Introduction },
    { name: "Chart of Accounts and Transaction Recording", component: ChartOfAccounts },
    { name: "Building the Balance Sheet", component: BalanceSheet },
    { name: "Constructing the Income Statement", component: IncomeStatement },
    { name: "Creating the Statement of Cash Flows", component: CashFlow },
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Private Equity Fund Accounting Course</h1>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        {modules.map((module, index) => (
          <button 
            key={index}
            onClick={() => setCurrentModule(index)}
            style={{
              padding: '10px',
              backgroundColor: currentModule === index ? '#007bff' : '#f0f0f0',
              color: currentModule === index ? 'white' : 'black',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Module {index + 1}
          </button>
        ))}
      </div>

      <h2>{modules[currentModule].name}</h2>

      {React.createElement(modules[currentModule].component)}
    </div>
  );
};

export default App;