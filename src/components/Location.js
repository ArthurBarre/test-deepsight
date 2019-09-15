import React, { Component } from 'react'

class Location extends Component {
  render() {
    return (
      <div className="location">
        <h3 className="locationTitle text">{this.props.location}</h3>
      </div>
    )
  }
}
export default Location;