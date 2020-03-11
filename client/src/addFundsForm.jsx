import React from "react";

class AddFundsForm extends React.Component {
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
    event.preventDefault();
    this.props.updateFundsHandler(this.state.amount);
    this.setState({
      amount: ""
    });
  }

  render() {
    return(
      <form onSubmit={this.onSubmitBound}>
        <label>
          Add funds: $
          <input type="text" name="amount" value={this.state.amount} onChange={this.onChangeBound} />
          <input type="submit" value="Add" />
        </label>
      </form>
    );
  }

}


export default AddFundsForm;