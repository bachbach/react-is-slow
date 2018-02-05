import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Paragraph extends Component {
  shouldComponentUpdate (nextProps) {
    return nextProps.options !== this.props.options
  }

  render () {
    console.log('Paragraph rendered')
    return (
      <p style={this.props.options.style}>{this.props.options.text}</p>
    )
  }
}

Paragraph.propTypes = {
  options: PropTypes.shape({
    text: PropTypes.string,
    style: PropTypes.object
  })
}

export default Paragraph

// import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
//
// class Paragraph extends PureComponent {
//   render () {
//     console.log('Paragraph rendered')
//     return (
//       <div style={this.props.options.style}>{this.props.options.text}</div>
//     )
//   }
// }
//
// Paragraph.propTypes = {
//   options: PropTypes.shape({
//     text: PropTypes.string,
//     style: PropTypes.object
//   })
// }
//
// export default Paragraph



// import React from 'react'
// import pure from 'recompose/pure'
// import PropTypes from 'prop-types'
//
// const Paragraph = (props) => {
//   console.log('Paragraph rendered')
//   return (
//     <div style={props.options.style}>{props.options.text}</div>
//   )
// }
//
// Paragraph.propTypes = {
//   options: PropTypes.shape({
//     text: PropTypes.string,
//     style: PropTypes.object
//   })
// }
//
// export default pure(Paragraph)