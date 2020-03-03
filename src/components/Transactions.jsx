import React from "react";
import Transaction from "./Transaction";

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
