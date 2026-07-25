import React from 'react';
import './App.css';

// Single office object
const office = {
  name: 'Tech Park Office',
  rent: 55000,
  address: '123 Business District, Bangalore'
};

// Array of office objects
const officeList = [
  { id: 1, name: 'Tech Park Office', rent: 55000, address: '123 Business District, Bangalore' },
  { id: 2, name: 'Downtown Workspace', rent: 75000, address: '456 MG Road, Mumbai' },
  { id: 3, name: 'Startup Hub', rent: 45000, address: '789 HSR Layout, Bangalore' },
  { id: 4, name: 'Corporate Tower', rent: 90000, address: '321 Nariman Point, Mumbai' },
  { id: 5, name: 'Co-working Space', rent: 35000, address: '654 Koramangala, Bangalore' }
];

function App() {
  // Inline CSS style object
  const headingStyle = {
    color: '#282c34',
    fontSize: '2em',
    textAlign: 'center'
  };

  const imageStyle = {
    width: '300px',
    height: '200px',
    borderRadius: '10px',
    margin: '20px auto',
    display: 'block'
  };

  // Function to get rent color based on condition
  const getRentStyle = (rent) => {
    return {
      color: rent < 60000 ? 'red' : 'green',
      fontWeight: 'bold'
    };
  };

  return (
    <div className="App">
      {/* Heading element using JSX */}
      <h1 style={headingStyle}>Office Space Rental App</h1>
      
      {/* Image attribute using JSX */}
      <img 
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400" 
        alt="Office Space" 
        style={imageStyle}
      />

      {/* Single Office Object Display */}
      <div className="office-card">
        <h2>Featured Office</h2>
        <p><strong>Name:</strong> {office.name}</p>
        <p><strong>Rent:</strong> <span style={getRentStyle(office.rent)}>Rs. {office.rent}</span></p>
        <p><strong>Address:</strong> {office.address}</p>
      </div>

      {/* List of Office Objects - Loop through using map */}
      <div className="office-list">
        <h2>Available Office Spaces</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Rent (Rs.)</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {officeList.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td style={getRentStyle(item.rent)}>Rs. {item.rent}</td>
                <td>{item.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
