import React, { Component } from "react";
import "../css/Transaction.css";

const Transaction = props => {
  return (
    <div className="Transaction">
      <div className="transaction-fields">
        <div className="transaction-field">
          <p className="transaction-name">{props.name}</p>
        </div>
        <div className="transaction-field">
          ${props.cost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
        </div>
        <div className="transaction-field">
          <p className="transaction-category">{props.category}</p>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
