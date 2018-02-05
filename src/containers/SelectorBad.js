import React, { Component } from 'react'
import UsersList from 'connectors/UsersConnector'

class SelectorBad extends Component {

  render () {
    return (
      <div>
        <button onClick={this.props.fetchUsers}>load users</button>
        <UsersList />
      </div>
    )
  }
}

export default SelectorBad