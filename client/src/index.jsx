import React from "react";
import ReactDOM from "react-dom";

import MainList from "./mainList.jsx";
import SpendForm from "./spendForm.jsx";
import Graph from "./graph.jsx";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalFunds: 0,
      categories: [{name: "rent", now: 1000}, {name: "groceries", now: 150}]
    };
    this.updateCategoryBound = this.updateCategory.bind(this);
    this.deleteCategoryBound = this.deleteCategory.bind(this);
    this.addCategoryBound = this.addCategory.bind(this);
  }

  componentDidMount() {

  }

  getTotalFunds() {

  }

  getAllCategories() {

  }

  addCategory(name) {

  }

  updateCategory(name, field, amount) {

  }

  deleteCategory(name) {

  }

  render() {
    return (
      <div>
        <h1>Envelope</h1>
        <h2>Funds: ${this.state.totalFunds}</h2>
        <h3>My envelopes:</h3>
        <MainList categories={this.state.categories} updateHandler={this.updateCategoryBound} deleteHandler={this.deleteCategoryBound} addHandler={this.addCategoryBound} />
        <SpendForm handler={this.updateCategoryBound} />
        <Graph />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById("app"));