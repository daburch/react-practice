import React, { Component } from "react";
import "../css/AddTransaction.css";

class addTransaction extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "", cost: "", category: "MISC" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        .then(resp => resp.status)
        .then(status => {
          if (status !== 201) {
            alert(
              "Failed to create transaction. Please check your input and try again."
            );
          } else {
            this.setState({
              name: "",
              cost: ""
            });
          }
        })
        .catch(() => {
          alert("Transaction server unavailable. Please try again later.");
        });
    }
  }

  render() {
    return (
      <div className="AddTransaction">
        <h3>Add Transaction:</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="transaction-input">
            <div className="transaction-input-labels">
              <label>Name: </label>
              <label>Cost: </label>
              <label>Category: </label>
            </div>
            <div className="transaction-input-fields">
              <input
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <input
                name="cost"
                type="text"
                value={this.state.cost}
                onChange={this.handleChange}
              />
              <select name="category" onChange={this.handleChange}>
                <option value="misc">Misc</option>
                <option value="bills">Bills</option>
                <option value="food">Food</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <input className="transaction-submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

function createTransaction() {}

export default addTransaction;
