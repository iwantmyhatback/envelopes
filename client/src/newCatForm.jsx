import React from "react";

class NewCatForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };
    this.onChangeBound = this.onChange.bind(this);
    this.onSubmitBound = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.addHandler(this.state.name);
    this.setState({
      name: ""
    });
  }

  render() {
    return (
      <div>
        <br />
        <h4>Create A New Envelope:</h4>
        <form onSubmit={this.onSubmitBound}>
          <input
            type="text"
            name="name"
            placeholder="Envelope Name"
            value={this.state.name}
            onChange={this.onChangeBound}
          />
          <br />
          <input type="submit" value="Create" />
        </form>
      </div>
    );
  }
}

export default NewCatForm;
