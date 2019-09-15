import React, { Component } from 'react';

class DateWitness extends Component {
  render() {
    return (
      <div className="dateWitness">
        <i className="far fa-calendar"></i>
        <h3 className="dateWitnnessTitle text">{this.props.dateWitness}</h3>
      </div>
    )
  }
}
export default DateWitness;