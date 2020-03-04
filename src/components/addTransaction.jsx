import React from "react";
import "../css/AddTransaction.css";

const AddTransaction = props => {
  return (
    <div className="AddTransaction">
      <h3>Add Transaction:</h3>
      <form onSubmit={props.onSubmit}>
        <div className="transaction-input">
          <div className="transaction-input-labels">
            <label>Description: </label>
            <label>Amount: </label>
            <label>Category: </label>
          </div>
          <div className="transaction-input-fields">
            <input
              name="description"
              type="text"
              value={props.description}
              onChange={props.onChange}
            />
            <input
              name="amount"
              type="text"
              value={props.amount}
              onChange={props.onChange}
            />
            <select name="category" onChange={props.onChange}>
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
};

export default AddTransaction;
