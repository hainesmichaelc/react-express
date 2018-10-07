import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import TestComponent from './components/TestComponent';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div>
            <Route exact path='/' render={(props) => <TestComponent {...props} message={'Welcome to the homepage. Try routing to /route1 or /route2.'} />} />
            <Route path='/route1' render={(props) => <TestComponent {...props} message={'Hello from client-side route route1.'} />} />
            <Route path='/route2' render={(props) => <TestComponent {...props} message={'Hello from client-side route route2.'} />} />
          </div>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
