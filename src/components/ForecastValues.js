import React, { Component } from 'react';

class ForecastValues extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var forecast = this.props.forecastValue;
    // console.log('temperatures: ', forecast);

    return (
      <div className="forecastValues">
        <div className="forecastValuesContainer">
          <span style={{ color: '#0A3EFF' }} className="forecastValue">{forecast.forecastClient}</span><span className="forecastValue">|</span>
          <span style={{ color: '#98A6C3' }} className="forecastValue">{forecast.forecastLastYear}</span>
        </div>
      </div>
    )
  }
}
export default ForecastValues;