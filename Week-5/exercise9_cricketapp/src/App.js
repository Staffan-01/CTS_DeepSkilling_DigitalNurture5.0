import React from 'react';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';
import './App.css';

// Flag variable to toggle between components
const flag = true;

function App() {
  return (
    <div className="App">
      <h1>Cricket App - ES6 Features Demo</h1>
      
      {flag ? (
        <div>
          <h2 className="flag-status">Flag = true (Showing ListofPlayers)</h2>
          <ListofPlayers />
        </div>
      ) : (
        <div>
          <h2 className="flag-status">Flag = false (Showing IndianPlayers)</h2>
          <IndianPlayers />
        </div>
      )}
    </div>
  );
}

export default App;
