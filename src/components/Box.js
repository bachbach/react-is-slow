import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paragraph from 'components/Paragraph'

class Box extends Component {
  bodyOptions = { text: 'Hello world', style: { marginTop: 10 } }

  render () {
    console.log('Box rendered')
    return (
      <div>
        <span>clicked: {this.props.clicks}</span>
        <Paragraph options={this.bodyOptions}/>
      </div>
    )
  }
}

Box.propTypes = {
  clicks: PropTypes.number
}

export default Box