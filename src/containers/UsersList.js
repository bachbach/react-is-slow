import React from 'react'
import PropTypes from 'prop-types'
import UserConnector from 'connectors/UserConnector'

const UsersList = (props) => {
  return (
    <div className='container'>
      { props.users.map(user => <UserConnector key={user.id} user={user} />) }
    </div>
  )
}

UsersList.propTypes = {
  users: PropTypes.array
}

export default UsersList