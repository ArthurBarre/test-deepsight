import React, { Component } from 'react'
import Location from "./Location";
import DateWitness from './DateWitness';
import Confirmation from './Confirmation';
import ForecastContainerValues from './ForecastContainerValue';

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      forecast: "",
      longDate: this.props.data[0].longDate
    }
  }

  changeForecast = (newValue) => newValue !== '' && this.setState({
    forecast: newValue
  })
  changeDate = (longDate) => {
    this.setState({
      longDate: longDate
    })
  }
  getId = (id) => {
    this.setState({
      id: id
    });

  }
  render() {
    const data = this.props.data;
    //console.log('data: ', data[0]);
    return (
      <div className="forecastContainer">
        <div className="forecastDate">
          <h3 className="forecastDateTitle">{this.state.longDate}</h3>
        </div>
        <article className="forecastContent">
          <div className="contentContainer">
            <div className="contentFirstRow">
              <div className="firstRowContainer">
                <Location getId={this.getId} items={data}
                />
                <DateWitness getId={this.getId} dateWitness={data} onChangeDate={this.changeDate} />
              </div>
            </div>
            <div className="contentSecondRow">
              <ForecastContainerValues id={this.state.id} forecastValue={this.state.forecast} />
              <Confirmation onSubmit={this.changeForecast} />
            </div>
          </div>
        </article>
      </div>
    )
  }
}
export default Forecast;