// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {
  constructor(){
    super()
    this.state = {
      timesClicked: 0,
    }
  }
  render(){
    return (
      <div>

        <button onClick={this.clicked}>{this.state.timesClicked}</button>
      </div>
    )
  }
  clicked = ()=>{
    this.setState(
      {timesClicked: (this.state.timesClicked+1)},
    )

  }
}

export default DigitalClicker
