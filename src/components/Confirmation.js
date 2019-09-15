import React, { Component } from 'react'
class Confirmation extends Component {
  state = {
    input: ''
  };

  onInput = (e) => {
    this.setState({
      input: e.target.value
    })
    this.getValue(e.target.value)
  };
  getValue(elem) {
    const newValue = elem;
    return newValue;
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
  }


  render() {
    return (
      <form className="confirmation" onSubmit={this.onSubmit}>
        <input
          value={this.state.input}
          onChange={this.onInput}
          type="number"
          className="confirmationInput"
        />
        <button
          className="confirmationSubmit"><h5 className="confirmationSubmitTitle">Confirmation</h5></button>
      </form>
    )
  }
}
export default Confirmation;