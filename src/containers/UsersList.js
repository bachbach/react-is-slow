import React from 'react'
import PropTypes from 'prop-types'
import User from 'connectors/UserConnector'

const UsersList = (props) => {
  return (
    <div className='container'>
      { props.users.map(user => <User key={user.id} userId={user.id} />) }
    </div>
  )
}

UsersList.propTypes = {
  users: PropTypes.array
}

export default UsersList