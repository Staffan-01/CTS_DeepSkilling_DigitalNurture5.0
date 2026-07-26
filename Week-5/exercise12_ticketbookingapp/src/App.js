import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn } = this.state;

    // Element variable for conditional rendering
    let page;

    if (isLoggedIn) {
      page = (
        <div className="user-page">
          <h2>Welcome, Logged In User!</h2>
          <p>You can now book your flight tickets.</p>
          <div className="flight-details">
            <h3>Available Flights</h3>
            <table>
              <thead>
                <tr>
                  <th>Flight</th>
                  <th>Route</th>
                  <th>Time</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>AI-302</td>
                  <td>Delhi - Mumbai</td>
                  <td>10:00 AM</td>
                  <td>Rs. 5,500</td>
                </tr>
                <tr>
                  <td>SG-105</td>
                  <td>Bangalore - Chennai</td>
                  <td>2:30 PM</td>
                  <td>Rs. 3,200</td>
                </tr>
                <tr>
                  <td>6E-201</td>
                  <td>Hyderabad - Pune</td>
                  <td>6:00 PM</td>
                  <td>Rs. 4,100</td>
                </tr>
              </tbody>
            </table>
            <button className="book-btn">Book Ticket</button>
          </div>
          <button className="logout-btn" onClick={this.handleLogout}>Logout</button>
        </div>
      );
    } else {
      page = (
        <div className="guest-page">
          <h2>Welcome, Guest User!</h2>
          <p>Please login to book flight tickets.</p>
          <div className="flight-details">
            <h3>Flight Information</h3>
            <table>
              <thead>
                <tr>
                  <th>Flight</th>
                  <th>Route</th>
                  <th>Time</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>AI-302</td>
                  <td>Delhi - Mumbai</td>
                  <td>10:00 AM</td>
                  <td>Rs. 5,500</td>
                </tr>
                <tr>
                  <td>SG-105</td>
                  <td>Bangalore - Chennai</td>
                  <td>2:30 PM</td>
                  <td>Rs. 3,200</td>
                </tr>
                <tr>
                  <td>6E-201</td>
                  <td>Hyderabad - Pune</td>
                  <td>6:00 PM</td>
                  <td>Rs. 4,100</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="login-btn" onClick={this.handleLogin}>Login</button>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Ticket Booking App</h1>
        {page}
      </div>
    );
  }
}

export default App;
