// Code CoordinatesButton Component Here

import React from 'react'

class CoordinatesButton extends React.Component{
  handleClick = (event) => {
    let xy =[]
    xy.push(event.clientX, event.clientY)
    this.props.onReceiveCoordinates(xy)
  }


  render(){
    return(
      <button onClick={this.handleClick}>
        Coordinates
      </button>
    )
  }
}

export default CoordinatesButton
