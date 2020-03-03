import React, { Component } from "react";
import "../css/Transaction.css";

class Transaction extends Component {
  state = {
    name: this.props.name,
    cost: this.props.cost,
    category: this.props.category
  };

  render() {
    return (
      <div className="Transaction">
        <div className="transaction-fields">
          <p className="transaction-field">{this.state.name}</p>
          <p className="transaction-field">{this.state.cost}</p>
          <p className="transaction-field">{this.state.category}</p>
        </div>
      </div>
    );
  }
}

export default Transaction;
