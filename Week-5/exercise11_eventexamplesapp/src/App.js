import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  // Increment counter
  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  // Decrement counter
  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  // Say Hello method
  sayHello = () => {
    alert('Hello! This is a static message.');
  };

  // Multiple methods - Increment + Say Hello
  incrementAndSayHello = () => {
    this.increment();
    this.sayHello();
  };

  // Say Welcome with argument
  sayWelcome = (message) => {
    alert(message);
  };

  // Synthetic event - OnPress
  onPress = (e) => {
    alert('I was clicked');
    console.log('Synthetic Event:', e);
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="App">
        <h1>React Event Handling Examples</h1>

        {/* Counter Section */}
        <div className="section">
          <h2>Counter Example</h2>
          <p className="counter-value">Counter Value: <strong>{counter}</strong></p>
          <div className="button-group">
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            <button onClick={this.incrementAndSayHello}>Increment & Say Hello</button>
          </div>
        </div>

        {/* Say Welcome Section */}
        <div className="section">
          <h2>Say Welcome (Function with Argument)</h2>
          <button onClick={() => this.sayWelcome('Welcome to React Event Handling!')}>
            Say Welcome
          </button>
        </div>

        {/* Synthetic Event Section */}
        <div className="section">
          <h2>Synthetic Event Example</h2>
          <button onClick={this.onPress}>OnPress</button>
        </div>

        {/* Currency Convertor Section */}
        <div className="section">
          <CurrencyConvertor />
        </div>
      </div>
    );
  }
}

export default App;
