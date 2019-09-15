import React, { Component } from 'react';

class ForecastValues extends Component {
  render() {
    return (
      <div className="forecastValues">
        <div className="forecastValuesContainer">
          <span style={{ color: '#0A3EFF' }} className="forecastValue">{this.props.forecastClient}</span><span className="forecastValue">|</span>
          <span style={{ color: '#98A6C3' }} className="forecastValue">{this.props.forecastLastYear}</span>
        </div>
      </div>
    )
  }
}
export default ForecastValues;