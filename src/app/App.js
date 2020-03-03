import React from '../../node_modules/react';
import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http-service';

const http = new HttpService();

function App() {

  http.getProducts();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/app/App.js</code> and save to reload. Welcome!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
