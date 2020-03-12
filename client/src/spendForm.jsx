import React from "react";

class SpendForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: "Select",
      amount: ""
    };
    this.onChangeBound = this.onChange.bind(this);
    this.onSubmitBound = this.onSubmit.bind(this);
  }

  onChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  onSubmit(event) {
    console.log("ONSUBMIT");
    event.preventDefault();
    var id = Number(this.state.selectedCategory);

    var category;
    for (var cat of this.props.categories) {
      if (cat.id === id) {
        category = cat;
      }
    }

    const sanitizedAmount = this.props.sanitize(this.state.amount);

    const addAmount = sanitizedAmount * -1;

    console.log("addAmount, sanitized", addAmount, sanitizedAmount);

    this.props.updateCategoryHandler(category, "now", addAmount);
    this.props.updateCategoryHandler(category, "spent", sanitizedAmount);
    this.setState({
      amount: ""
    });
  }

  render() {
    {var options = this.props.categories.map((cat) => {
      return <option key={cat.id} name={cat.id} value={cat.id}>{cat.name}</option>
    })}
    return (
    <div id="purchase-form">
      <h3>Record a purchase:</h3>
      <form onSubmit={this.onSubmitBound}>
        <select name="selectedCategory" onChange={this.onChangeBound}>
          <option>Select</option>
          {options}
        </select>
        <label>
          Amount: $
          <input type="text" name="amount" value={this.state.amount} onChange={this.onChangeBound} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
    );
  }

}

export default SpendForm;