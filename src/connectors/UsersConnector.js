import { connect } from 'react-redux'
import UsersList from 'containers/UsersList'
import { getUsers } from 'selectors/users'
import { transformToArray } from '../helpers/redux';

const mapStateToProps = state => ({
  users: transformToArray(state.users.entries)
})

export default connect(mapStateToProps)(UsersList)