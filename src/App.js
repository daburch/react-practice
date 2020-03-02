import React from "react";
import "./css/App.css";
import Config from "./config/config.json";
import AddTransaction from "./components/addTransaction";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Transaction Tracker</h1>
      </header>
      <React.Fragment>
        <h1>Hello, {Config.name}!</h1>
        <AddTransaction />
      </React.Fragment>
    </div>
  );
}

export default App;
