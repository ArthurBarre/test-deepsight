import React, { Component } from 'react'
class Confirmation extends Component {
  state = {
    input: ''
  };

  // input change handler
  onInput = (e) => this.setState({
    input: e.target.value
  });

  // submit handler
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          // use value and onChange so it will be a controlled component
          value={this.state.value}
          onChange={this.onInput}
          type="text"
          placeholder="Type your text here" />
        <button type="submit">Confirmation</button>
      </form>
    )
  }
}
export default Confirmation;