// modules/BalanceSheet.js
import React, { useState } from 'react';

const BalanceSheet = () => {
  const [cash, setCash] = useState(0);
  const [investments, setInvestments] = useState(0);
  const [otherAssets, setOtherAssets] = useState(0);
  const [liabilities, setLiabilities] = useState(0);
  const [partnersCapital, setPartnersCapital] = useState(0);

  const totalAssets = cash + investments + otherAssets;
  const totalLiabilitiesAndCapital = liabilities + partnersCapital;

  const isBalanced = totalAssets === totalLiabilitiesAndCapital;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>
          <h3>Assets</h3>
          <input
            type="number"
            placeholder="Cash"
            value={cash}
            onChange={(e) => setCash(Number(e.target.value))}
            style={{ display: 'block', marginBottom: '10px' }}
          />
          <input
            type="number"
            placeholder="Investments"
            value={investments}
            onChange={(e) => setInvestments(Number(e.target.value))}
            style={{ display: 'block', marginBottom: '10px' }}
          />
          <input
            type="number"
            placeholder="Other Assets"
            value={otherAssets}
            onChange={(e) => setOtherAssets(Number(e.target.value))}
            style={{ display: 'block', marginBottom: '10px' }}
          />
        </div>
        <div>
          <h3>Liabilities and Partners' Capital</h3>
          <input
            type="number"
            placeholder="Liabilities"
            value={liabilities}
            onChange={(e) => setLiabilities(Number(e.target.value))}
            style={{ display: 'block', marginBottom: '10px' }}
          />
          <input
            type="number"
            placeholder="Partners' Capital"
            value={partnersCapital}
            onChange={(e) => setPartnersCapital(Number(e.target.value))}
            style={{ display: 'block', marginBottom: '10px' }}
          />
        </div>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '10px' }}>Assets</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Liabilities and Partners' Capital</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid black', padding: '10px' }}>Total Assets: ${totalAssets.toFixed(2)}</td>
            <td style={{ border: '1px solid black', padding: '10px' }}>Total Liabilities and Capital: ${totalLiabilitiesAndCapital.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: isBalanced ? 'green' : 'red',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          {isBalanced ? "Balance Sheet is Balanced!" : "Balance Sheet is Not Balanced"}
        </button>
      </div>
    </div>
  );
};

export default BalanceSheet;
