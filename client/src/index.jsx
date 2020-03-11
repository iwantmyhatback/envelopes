import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import MainList from "./mainList.jsx";
import SpendForm from "./spendForm.jsx";
import Graph from "./graph.jsx";
import FundsForm from "./addFundsForm.jsx";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalFunds: 0,
      categories: [{id: null, name: null, now: null}]
    };
    this.updateCategoryBound = this.updateCategory.bind(this);
    this.deleteCategoryBound = this.deleteCategory.bind(this);
    this.addCategoryBound = this.addCategory.bind(this);
    this.updateFundsBound = this.updateFunds.bind(this);
  }

  componentDidMount() {
    axios.get("/funds")
      .then((data) => {
        this.setState({
          totalFunds: data.data.total
        });
      })
      .catch((err) => {
        console.log("Error fetching funds");
      });
    axios.get("/cat")
      .then((data) => {
        this.setState({
          categories: data.data
        });
      })
      .catch((err) => {
        console.log("Error fetching categories");
      });
  }

  setCategories(cats) {
    this.setState({
      categories: cats
    });
  }

  updateFunds(amount) {
    axios.put("/funds", {
      total: amount
    })
      .then((data) => {
        this.setState({
          totalFunds: data.data
        });
      })
      .catch((err) => {
        console.log("Error updating funds");
      });
  }

  addCategory(name) {
    axios.post("/cat", {
      name: name
    })
      .then((data) => {
        this.setCategories(data.data);
      })
      .catch((err) => {
        console.error("Error adding envelope");
      });
  }

  updateCategory(id, field, amount) {
    axios.put("/cat", {
      id: id,
      [field]: amount
    })
      .then((data) => {
        console.log("data received back from server is", data);
        console.log("data.data received back from server is", data.data);
        this.setCategories(data.data);
      })
      .catch((err) => {
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
      .then((data) => {
        this.setCategories(data.data);
      })
      .catch((err) => {
        console.log("Error deleting envelope");
      });
  }

  render() {
    return (
      <div>
        <h1>Envelope</h1>
        <h2>Funds: ${this.state.totalFunds}</h2>
        <FundsForm updateHandler={this.updateFundsBound} />
        <h3>My envelopes:</h3>
        <MainList categories={this.state.categories} updateHandler={this.updateCategoryBound} deleteHandler={this.deleteCategoryBound} addHandler={this.addCategoryBound} />
        <SpendForm categories={this.state.categories} updateHandler={this.updateCategoryBound} />
        <Graph />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById("app"));