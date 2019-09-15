import React, { Component } from 'react';

class DateWitness extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    items: this.props.dateWitness || [],
    date: this.props.dateWitness[0].shortDate,
    longDate: '',
    showItems: false,
    selectedItems: null
  }

  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems
    }))
  }
  selectItem(id, shortDate, longDate) {
    this.dropDown()
    this.setState({
      date: shortDate,
    })
    this.props.onChangeDate(longDate)
    this.props.getId(id)
  }
  render() {
    return (
      // <div className="dateWitness">
      //   <i className="far fa-calendar"></i>
      //   <h3 className="dateWitnnessTitle text">{this.state.date}</h3>
      // </div>
      <div onClick={this.dropDown} className={`${this.state.showItems ? 'dateWitnessOpen' : 'dateWitness'}`}>
        <div style={{ display: "flex", width: "100%", height: "100%" }}>
          <h2 className="text">{this.state.date}</h2>
        </div>
        <div style={{ display: this.state.showItems ? 'block' : 'none' }}>
          {
            this.state.items.map(item => <div className="dates"
              key={item.id}
              onClick={() => this.selectItem(item.id, item.shortDate, item.longDate)}
            >
              <h3 className="date">
                {item.shortDate}
              </h3>
            </div>
            )
          }
        </div>
      </div>
    )
  }
}
export default DateWitness;