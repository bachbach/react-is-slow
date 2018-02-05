import React, { Component } from 'react'
import PropTypes from 'prop-types'
import JobDetails from 'connectors/JobConnector'
import './UserDetails.css'

class User extends Component {
  updateUser = () => this.props.updateUser(this.props.user.id)

  render () {
    const { user } = this.props
    console.log('render user')
    return (
      <div className='user-details'>
        <div className='user-details--item'>{user.firstName}</div>
        <div className='user-details--item'>{user.lastName}</div>
        <div className='user-details--item'>{user.email}</div>
        <div className='user-details--item'>{user.age}</div>
        <button onClick={this.updateUser}>update user</button>
        <JobDetails userId={user.id}/>
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