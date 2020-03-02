import React, { Component } from "react";
import "../css/AddTransaction.css";

class addTransaction extends Component {
  render() {
    return (
      <div className="AddTransaction">
        <h3>Add Transaction:</h3>
        <form>
          <div className="transaction-input">
            <div className="transaction-input-labels">
              <label>Name: </label>
              <label>Cost: </label>
              <label>Category: </label>
            </div>
            <div className="transaction-input-fields">
              <input type="text" name="name" />
              <input type="text" name="cost" />
              <select name="category">
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

export default addTransaction;
