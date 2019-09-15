import React, { Component } from 'react';

class ForecastWeather extends Component {
  render() {
    return (
      <div className="forecastWeather">
        <div className="forecastWeatherContainer">
          <span aria-label="cloud">☁️</span><span className="weatherValue">{this.props.temperatureMax}</span><span className="weatherValue">|</span><span style={{ color: '#B5BAC5' }} className="weatherValue">{this.props.temperatureMin}</span>
        </div>

      </div>
    )
  }
}
export default ForecastWeather;