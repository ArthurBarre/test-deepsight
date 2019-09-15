import React, { Component } from 'react';
import ForecastWeather from './ForeCastWeather';
import ForercastConfirmValue from './ForercastConfirmValue';
import ForecastValues from './ForecastValues';

class ForecastContainerValues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0
    }
  }

  updateValues(id) {
    this.setState({
      id: id
    })
  }
  render() {
    const FORECAST_VALUES = [
      { id: 0, temperatureMax: 20, temperatureMin: 12, forecastClient: 200, forecastLastYear: 146 },
      { id: 1, temperatureMax: 29, temperatureMin: 21, forecastClient: 251, forecastLastYear: 300 },
      { id: 2, temperatureMax: 32, temperatureMin: 20, forecastClient: 210, forecastLastYear: 147 }
    ]
    const forecastValue = this.props.forecastValue;
    var id = this.props.id
    console.log('id: ', id);

    return (
      <div className="forecastContainerValues">
        <ForecastWeather forecastValue={FORECAST_VALUES[id]} />
        <ForercastConfirmValue forecastValue={forecastValue} />
        <ForecastValues forecastValue={FORECAST_VALUES[id]} />
      </div>
    )
  }
}
export default ForecastContainerValues;