import React, { Component } from "react";
import "../css/AddTransaction.css";

class addTransaction extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "", cost: "", category: "" };

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

    fetch("https://reactnative.dev/movies.json")
      .then(resp => resp.json())
      .then(json => json.movies[0])
      .then(movie => console.log(movie.title));
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
              <input name="name" type="text" onChange={this.handleChange} />
              <input name="cost" type="text" onChange={this.handleChange} />
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

export default addTransaction;
