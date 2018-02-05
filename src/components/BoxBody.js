import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BoxBody extends Component {
  shouldComponentUpdate (nextProps) {
    return nextProps.options !== this.props.options
  }

  render () {
    console.log('BoxBody rendered')
    return (
      <div style={this.props.options.style}>{this.props.options.text}</div>
    )
  }
}

BoxBody.propTypes = {
  options: PropTypes.shape({
    text: PropTypes.string,
    style: PropTypes.object
  })
}

export default BoxBody

// import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
//
// class BoxBody extends PureComponent {
//   render () {
//     console.log('BoxBody rendered')
//     return (
//       <div style={this.props.options.style}>{this.props.options.text}</div>
//     )
//   }
// }
//
// BoxBody.propTypes = {
//   options: PropTypes.shape({
//     text: PropTypes.string,
//     style: PropTypes.object
//   })
// }
//
// export default BoxBody



// import React from 'react'
// import pure from 'recompose/pure'
// import PropTypes from 'prop-types'
//
// const BoxBody = (props) => {
//   console.log('BoxBody rendered')
//   return (
//     <div style={props.options.style}>{props.options.text}</div>
//   )
// }
//
// BoxBody.propTypes = {
//   options: PropTypes.shape({
//     text: PropTypes.string,
//     style: PropTypes.object
//   })
// }
//
// export default pure(BoxBody)