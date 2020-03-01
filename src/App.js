import React from 'react';
import './App.css';
import Config from './config/config.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Header</h1>
      </header>
      <body>
        <h1>Hello, {Config.name}!</h1>
      </body>
    </div>
  );
}

export default App;
