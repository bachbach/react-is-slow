import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BoxBody from 'components/BoxBody'

class Box extends Component {
  bodyOptions = { text: 'Hello world', style: { marginTop: 10 } }

  render () {
    console.log('Box rendered')
    return (
      <div>
        <span>clicked times: {this.props.clickedTimes}</span>
        <BoxBody options={this.bodyOptions}/>
      </div>
    )
  }
}

Box.propTypes = {
  clickedTimes: PropTypes.number
}

export default Box