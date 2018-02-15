import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddressDetails extends Component {
  updateAddress = (id) => () => this.props.updateAddress(id)

  render () {
    const { address } = this.props
    console.log('%c address', 'color: #ed3b44;')

    return (
      <div>
        <div>{address.streetAddress}</div>
        <div>{address.city}</div>
        <div>{address.country}</div>
        <button onClick={this.updateAddress(address.id)}>update address</button>
      </div>
    )
  }
}

AddressDetails.propTypes = {
  address: PropTypes.object,
  updateAddress: PropTypes.func
}

export default AddressDetails