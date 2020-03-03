import React, { Component } from "react";
import Transaction from "./Transaction";
import "../css/Transactions.css";

const Transactions = props => {
  return (
    <div className="Transactions">
      {props.transactions.map(({ id, name, cost, category }) => (
        <Transaction key={id} name={name} cost={cost} category={category} />
      ))}
    </div>
  );
};

export default Transactions;
