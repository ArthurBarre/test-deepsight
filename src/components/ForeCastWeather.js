import React, { Component } from 'react';

class ForecastWeather extends Component {
  constructor(props) {
    super(props)
    this.state = {
      forecast: this.props.forecastValue
    }
  }
  render() {
    var temperatures = this.props.forecastValue;
    // console.log('temperatures: ', temperatures);

    return (
      <div className="forecastWeather">
        <div className="forecastWeatherContainer">
          <span aria-label="cloud">☁️</span><span className="weatherValue">{temperatures.temperatureMax}</span><span className="weatherValue">|</span><span style={{ color: '#B5BAC5' }} className="weatherValue">{temperatures.temperatureMin}</span>
        </div>

      </div>
    )
  }
}
export default ForecastWeather;