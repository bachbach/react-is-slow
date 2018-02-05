import React, { Component } from 'react'
import Box from 'components/Box'

class ComplexDataScreen extends Component {
  state = {
    clicks: 0
  }

  handleClick = () => this.setState({ clicks: ++this.state.clicks })

  render () {
    return (
      <div>
        <button onClick={this.handleClick}>refresh component</button>
        <Box clicks={this.state.clicks} />
      </div>
    )
  }
}

export default ComplexDataScreen