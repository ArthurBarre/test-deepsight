import React, { Component } from 'react'

class Location extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    items: this.props.items || [],
    title: this.props.items[0].location,
    id: 0,
    showItems: false,
    selectedItems: null
  }

  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems
    }))
  }
  selectItem(id, location) {
    this.props.getId(id)
    this.dropDown()
    this.setState({
      title: location,
      id: id
    })
  }

  render() {
    return (
      <div onClick={this.dropDown} className={`${this.state.showItems ? 'locationOpen' : 'location'}`}>
        <div className="locationContainer">
          <h2 className="locationTitle">{this.state.title}</h2>
        </div>
        <div style={{ display: this.state.showItems ? 'block' : 'none' }}>
          {
            this.state.items.map(item => <div
              className="locations"
              key={item.id}
              onClick={() => this.selectItem(item.id, item.location)}
            >
              <h3 className="locationText">
                {item.location}
              </h3>
            </div>
            )
          }
        </div>
      </div>
    )
  }
}
export default Location;


