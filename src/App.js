import React from 'react';
import logo from './logo.svg';
import './App.css';

function formatName(user) {
  return user.firtName + '_' + user.lastName;
}

const user = {
  firtName: 'Jefferson',
  lastName: 'Campos'
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, {formatName(user)}!
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
