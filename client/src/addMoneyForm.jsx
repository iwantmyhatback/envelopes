import React from "react";


class AddMoneyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: "Amount"
    };
    this.onChangeBound = this.onChange.bind(this);
    this.onSubmitBound = this.onSubmit.bind(this);
  }

  onChange(event) {

  }

  onSubmit(event) {
    event.preventDefault();

  }

  render() {
    return (
      <form onSubmit={this.onSubmitBound}>
        <label>
          Add money:
          <input type="text" name="amount" value={this.state.amount} onChange={this.onChangeBound} />
        </label>
        <input type="submit" value="Add" />
      </form>
    );
  }

}

export default AddMoneyForm;