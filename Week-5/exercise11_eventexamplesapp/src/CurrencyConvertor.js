import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euro: ''
    };
  }

  // Using this keyword to access state
  handleSubmit = (e) => {
    e.preventDefault();
    const { rupees } = this.state;
    // Conversion rate: 1 Euro = approximately 90 INR
    const euroValue = (rupees / 90).toFixed(2);
    this.setState({ euro: euroValue });
  };

  handleChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  render() {
    const { rupees, euro } = this.state;
    return (
      <div className="currency-section">
        <h2>Currency Convertor (INR to Euro)</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Enter amount in Indian Rupees: </label>
            <input
              type="number"
              value={rupees}
              onChange={this.handleChange}
              placeholder="Enter amount"
            />
          </div>
          <button type="submit">Convert</button>
        </form>
        {euro && (
          <div className="result">
            <p><strong>{rupees} INR = {euro} Euro</strong></p>
          </div>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
