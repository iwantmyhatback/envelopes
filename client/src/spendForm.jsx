import React from "react";

class SpendForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "Select",
      amount: ""
    };
    this.onChangeBound = this.onChange.bind(this);
    this.onSubmitBound = this.onSubmit.bind(this);
  }

  onChange(event) {

  }

  onSubmit(event) {

  }

  render() {
    {var options = this.props.categories.map((cat) => {
      return <option key={cat.id} value={cat.id}>{cat.name}</option>
    })}
    return (
    <div>
      <h3>Record a purchase:</h3>
      <form onSubmit={this.onSubmitBound}>
        <select onChange={this.onChangeBound}>
          <option>Select</option>
          {options}
        </select>
        <label>
          Amount: $
          <input type="text" name="amount" value={this.state.amount} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
    );
  }

}

export default SpendForm;