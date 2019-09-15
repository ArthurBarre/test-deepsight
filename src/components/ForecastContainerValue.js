import React, { Component } from 'react';
import ForecastWeather from './ForeCastWeather';
import ForercastConfirmValue from './ForercastConfirmValue';
import ForecastValues from './ForecastValues';

class ForecastContainerValues extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const forecastValue = this.props.forecastValue;
    console.log('forecastValue: ', forecastValue);
    return (
      <div className="forecastContainerValues">
        <ForecastWeather temperatureMax="27" temperatureMin="23" />
        <ForercastConfirmValue forecastValue={forecastValue} />
        <ForecastValues forecastClient="88" forecastLastYear="230" />
      </div>
    )
  }
}
export default ForecastContainerValues;