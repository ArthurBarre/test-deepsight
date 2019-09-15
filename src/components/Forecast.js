import React, { Component } from 'react'
import Location from "./Location";
import DateWitness from './DateWitness';
import Confirmation from './Confirmation';
import ForecastContainerValues from './ForecastContainerValue';

class Forecast extends Component {
  state = {
    forecast: ""
  }
  changeForecast = (newValue) => newValue !== '' && this.setState({
    forecast: newValue
  })
  render() {
    return (
      <div className="forecastContainer">
        <div className="forecastDate">

        </div>
        <article className="forecastContent">
          <div className="contentContainer">
            <div className="contentFirstRow">
              <div className="firstRowContainer">
                <Location location="Restaurant Toronto Canada" />
                <DateWitness dateWitness="5 oct" />
              </div>

            </div>
            <div className="contentSecondRow">
              <ForecastContainerValues forecastValue={this.state.forecast} />
              <Confirmation onSubmit={this.changeForecast} />
            </div>
          </div>
        </article>
      </div>
    )
  }
}
export default Forecast;