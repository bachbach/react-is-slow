import { connect } from 'react-redux'
import faker from 'faker'
import User from 'components/User'
import { getUserById } from 'selectors/users'
import { updateUser } from 'ducks/users'

const mapStateToProps = (state, ownProps) => ({
  user: state.users.entries[ownProps.userId]
})

const mapDispatchToProps = (dispatch) => ({
  updateUser: (id) => dispatch(updateUser({ id, firstName: faker.name.firstName() }))
})

export default connect(mapStateToProps, mapDispatchToProps)(User)