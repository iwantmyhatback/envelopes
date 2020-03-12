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
      categories: [{ id: null, name: null, now: 0, spent: 0 }]
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
        this.setState(
          {
            categories: data.data
          },
          () => {
            this.setState({
              data: {
                dataset: this.state.categories,
                margins: { top: 10, right: 10, bottom: 10, left: 10 },
                yAxisLabel: "Spent Money",
                fill: "steelblue",
                ticks: 10,
                barClass: "barChart"
              }
            });
          }
        );
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

    console.log("UPDATED CATEGORY new amount = ", newAmount);

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
        <header>
          <h1>Envelope</h1>
          <h2>
            Funds: ${this.state.totalFunds}{" "}
            <button
              type="button"
              onClick={() => {
                this.updateFundsBound(this.state.totalFunds * -1);
              }}
            >
              Clear Funds
            </button>
          </h2>
          <AddFundsForm sanitize={this.sanitizeBound} updateFundsHandler={this.updateFundsBound} />
          <SpendForm
              categories={this.state.categories}
              updateCategoryHandler={this.updateCategoryBound}
              sanitize={this.sanitizeBound}
            />
        </header>
        <div id="boxes-graph">
          <MainList
            categories={this.state.categories}
            updateCategoryHandler={this.updateCategoryBound}
            updateFundsHandler={this.updateFundsBound}
            deleteHandler={this.deleteCategoryBound}
            addHandler={this.addCategoryBound}
            sanitize={this.sanitizeBound}
          />
          <div id="graph-section">
            <Graph categories={this.state.categories} />
            </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
