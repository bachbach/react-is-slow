import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddressConnector from 'connectors/AddressConnector'
import './UserDetails.css'

class User extends Component {
  render () {
    const { user } = this.props
    console.log('render user')
    return (
      <div className='user-details'>
        <div className='user-details--item'>{user.firstName}</div>
        <div className='user-details--item'>{user.lastName}</div>
        <div className='user-details--item'>{user.email}</div>
        <div className='user-details--item'>{user.age}</div>
        <button onClick={this.props.updateUser}>update user</button>
        <AddressConnector userId={user.id} />
      </div>
    )
  }
}

User.defaultProps = {
  user: {}
}

User.propTypes = {
  user: PropTypes.object,
  updateUser: PropTypes.func.isRequired
}

export default User