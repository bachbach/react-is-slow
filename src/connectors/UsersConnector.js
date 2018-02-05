import { connect } from 'react-redux'
import UsersList from 'containers/UsersList'
import { getUsers } from 'selectors/users'

const mapStateToProps = state => ({
  users: getUsers(state)
})

export default connect(mapStateToProps)(UsersList)