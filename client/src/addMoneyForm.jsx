import React from "react";

class AddMoneyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: ""
    };
    this.onChangeBound = this.onChange.bind(this);
    this.onSubmitBound = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      amount: event.target.value
    });
  }

  onSubmit(event) {
    // subtract amount from funds and update envelope money
    event.preventDefault();
    const sanitizedAmount = this.props.sanitize(this.state.amount);
    const changeFunds = sanitizedAmount * -1;
    this.props.updateFundsHandler(changeFunds);
    this.props.updateCategoryHandler(this.props.category, "now", sanitizedAmount);
    this.setState({
      amount: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitBound}>
        <label>
          Set Aside Money
          <input
            type="text"
            name="amount"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onChangeBound}
          />
        </label>
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default AddMoneyForm;
