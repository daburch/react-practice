import React from "react";
import "../css/AddTransaction.css";

const AddTransaction = props => {
  return (
    <div className="AddTransaction">
      <h3>Add Transaction:</h3>
      <form onSubmit={props.onSubmit}>
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
              value={props.name}
              onChange={props.onChange}
            />
            <input
              name="cost"
              type="text"
              value={props.cost}
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
