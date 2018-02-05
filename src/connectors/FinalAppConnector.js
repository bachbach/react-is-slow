import { connect } from 'react-redux'
import { fetchUsers, } from 'ducks/users'
import FinalAppScreen from 'screens/FinalAppScreen'

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(null, mapDispatchToProps)(FinalAppScreen)