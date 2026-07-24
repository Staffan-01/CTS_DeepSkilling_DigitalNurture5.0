import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <h1>Student Score Calculator</h1>
      <CalculateScore 
        Name="John Doe" 
        School="Springfield High" 
        Total={450} 
        Goal={500} 
      />
    </div>
  );
}

export default App;
