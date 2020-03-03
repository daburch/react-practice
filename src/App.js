import React, { Component } from "react";
import "./css/App.css";
import Config from "./config/config.json";
import AddTransaction from "./components/AddTransaction";
import Transactions from "./components/Transactions";

class App extends Component {
  state = {
    name: "",
    cost: "",
    category: "MISC",
    transactions: []
  };

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/v1/transaction", {
      method: "get"
    })
      .then(resp => {
        if (resp.status !== 200) {
          alert("Failed to get transactions. Please try again later.");
        } else {
          return resp.json();
        }
      })
      .then(json => {
        this.setState({
          transactions: json
        });
      })
      .catch(e => {
        console.log(e);
        alert("Transaction server unavailable. Please try again later.");
      });
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.name === "" || this.state.cost === "") {
      alert("missing required data!");
    } else {
      fetch("http://localhost:8080/api/v1/transaction", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.state.name,
          cost: this.state.cost,
          category: this.state.category.toUpperCase()
        })
      })
        .then(resp => {
          if (resp.status !== 201) {
            throw Response.json();
          } else {
            return resp.json();
          }
        })
        .then(json => {
          var updatedTransactions = this.state.transactions.slice();
          updatedTransactions.unshift(json);

          this.setState({
            name: "",
            cost: "",
            transactions: updatedTransactions
          });
        })
        .catch(() => {
          alert(
            "Unable to create transaction. Please check your input or try again later."
          );
        });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="greeting">Transaction Tracker</h1>
        </header>
        <div className="App-body">
          <h1>Hello, {Config.name}!</h1>
          <AddTransaction
            name={this.state.name}
            cost={this.state.cost}
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
          />
          <Transactions transactions={this.state.transactions} />
        </div>
      </div>
    );
  }
}

export default App;
