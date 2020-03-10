import React from "react";

import MainList from "./mainList.jsx";
import SpendForm from "./spendForm.jsx";
import Graph from "./graph.jsx";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalFunds: 0,
      categories: []
    };
    this.updateCategoryBound = this.updateCategory.bind(this);
    this.deleteCategoryBound = this.deleteCategory.bind(this);
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
        <h2>Total Funds: ${this.state.totalFunds}</h2>
        <h3>My envelopes:</h3>
        <MainList categories={this.state.categories} changeHandler={this.updateCategoryBound} deleteHandler={this.deleteCategoryBound} />
        <SpendForm handler={this.updateCategoryBound} />
        <Graph />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById("app"));