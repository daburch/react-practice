import React from "react";
import Transaction from "./Transaction";

const Transactions = props => {
  return (
    <div className="Transactions">
      {props.transactions.map(({ id, description, amount, category }) => (
        <Transaction
          key={id}
          description={description}
          amount={amount}
          category={category}
        />
      ))}
    </div>
  );
};

export default Transactions;
