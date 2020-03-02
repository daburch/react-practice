import React, { Component } from "react";

class addTransaction extends Component {
  render() {
    return (
      <div className="AddTransaction">
        <h3>Add Transaction:</h3>
        <form>
          <label>
            Name: <input type="text" name="name" />
          </label>
          <br />
          <label>
            Cost: <input type="text" name="cost" />
          </label>
          <br />
          <label>
            Category:
            <select name="category">
              <option value="misc">Misc</option>
              <option value="bills">Bills</option>
              <option value="food">Food</option>
              <option value="other">Other</option>
            </select>
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default addTransaction;
