import React, { Component } from 'react'
import Box from 'components/Box'

class ObjectLiteralBad extends Component {
  state = {
    click: 0
  }

  handleClick = () => this.setState({ click: ++this.state.click })

  render () {
    return (
      <div>
        <button onClick={this.handleClick}>refresh component</button>
        <Box click={this.state.click} />
      </div>
    )
  }
}

export default ObjectLiteralBad