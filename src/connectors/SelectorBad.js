import { connect } from 'react-redux'
import { fetchUsers, } from 'ducks/users'
import SelectorBad from 'containers/SelectorBad'

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(null, mapDispatchToProps)(SelectorBad)