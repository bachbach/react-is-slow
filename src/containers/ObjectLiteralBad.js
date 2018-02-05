import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Box from 'components/Box'

class ObjectLiteralBad extends Component {
  state = {
    clickedTimes: 0
  }

  handleClick = () => this.setState({ clickedTimes: ++this.state.clickedTimes })

  render () {
    return (
      <div>
        <button onClick={this.handleClick}>refresh component</button>
        <Box clickedTimes={this.state.clickedTimes} />
      </div>
    )
  }
}

ObjectLiteralBad.propTypes = {

}

export default ObjectLiteralBad