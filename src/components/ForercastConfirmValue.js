import React from 'react';

const ForercastConfirmValue = (props) => {
  return (
    <div className="forercastConfirmValue">
      <span className="boldText">{props.forecastValue}</span>
    </div>
  )
}
export default ForercastConfirmValue;