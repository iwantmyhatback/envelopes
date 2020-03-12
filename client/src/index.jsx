import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import MainList from "./mainList.jsx";
import SpendForm from "./spendForm.jsx";
import Graph from "./graph.jsx";
import AddFundsForm from "./addFundsForm.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalFunds: 0,
      categories: [{ id: null, name: null, now: null }]
    };
    this.updateCategoryBound = this.updateCategory.bind(this);
    this.deleteCategoryBound = this.deleteCategory.bind(this);
    this.addCategoryBound = this.addCategory.bind(this);
    this.updateFundsBound = this.updateFunds.bind(this);
    this.sanitizeBound = this.sanitize.bind(this);
  }

  componentDidMount() {
    axios
      .get("/funds")
      .then(data => {
        this.setState({
          totalFunds: data.data[0].total
        });
      })
      .catch(err => {
        console.log("Error fetching funds");
      });
    axios
      .get("/cat")
      .then(data => {
        this.setState({
          categories: data.data
        });
      })
      .catch(err => {
        console.log("Error fetching categories");
      });
  }

  sanitize(input) {
    const num = input.replace(/[^0-9.]/g, "");
    return Number(num);
  }

  setCategories(cats) {
    this.setState({
      categories: cats
    });
  }

  updateFunds(amountAdded) {
    const newTotal = this.state.totalFunds + amountAdded;
    axios
      .put("/funds", {
        oldAmount: this.state.totalFunds,
        newAmount: newTotal
      })
      .then(data => {
        this.setState({
          totalFunds: data.data[0].total
        });
      })
      .catch(err => {
        console.log("Error updating funds");
      });
  }

  addCategory(name) {
    axios
      .post("/cat", {
        name: name
      })
      .then(data => {
        this.setCategories(data.data);
      })
      .catch(err => {
        console.error("Error adding envelope");
      });
  }

  updateCategory(category, field, amountAdded) {
    const newAmount = category[field] + amountAdded;
    axios
      .put("/cat", {
        id: category.id,
        [field]: newAmount
      })
      .then(data => {
        this.setCategories(data.data);
      })
      .catch(err => {
        console.log("Error updating envelope");
      });
  }

  deleteCategory(id) {
    axios({
      url: "/cat",
      method: "delete",
      params: {
        id: id
      }
    })
      .then(data => {
        this.setCategories(data.data);
      })
      .catch(err => {
        console.log("Error deleting envelope");
      });
  }

  render() {
    return (
      <div>
        <h1>Envelope</h1>
        <h2>Funds: ${this.state.totalFunds}
        <button type="button" 
        onClick={() => {this.updateFundsBound(this.state.totalFunds * -1)}}>
          Clear Funds
          </button></h2>
        <AddFundsForm sanitize={this.sanitizeBound} updateFundsHandler={this.updateFundsBound} />
        <h3>My envelopes:</h3>
        <MainList
          categories={this.state.categories}
          updateCategoryHandler={this.updateCategoryBound}
          updateFundsHandler={this.updateFundsBound}
          deleteHandler={this.deleteCategoryBound}
          addHandler={this.addCategoryBound}
          sanitize={this.sanitizeBound}
        />
        <SpendForm 
          categories={this.state.categories}
          updateCategoryHandler={this.updateCategoryBound}
          sanitize={this.sanitizeBound}
        />
        <Graph />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
