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
    event.preventDefault();
    let cat = this.state.selectedCategory;
    cat = cat.replace("\\", "");
    cat = JSON.parse(cat);

    const sanitizedAmount = this.props.sanitize(this.state.amount);

    const addAmount = sanitizedAmount * -1;
    this.props.updateCategoryHandler(cat, "now", addAmount);
    this.props.updateCategoryHandler(cat, "spent", sanitizedAmount);
    this.setState({
      amount: ""
    });
  }

  render() {
    {var options = this.props.categories.map((cat) => {
      return <option key={cat.id} name={cat.id} value={JSON.stringify(cat)}>{cat.name}</option>
    })}
    return (
    <div>
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