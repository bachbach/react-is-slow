import { connect } from 'react-redux'
import faker from 'faker'
import User from 'components/User'
import { getUserById } from 'selectors/users'
import { updateUser } from 'ducks/users'

const mapStateToProps = (state, ownProps) => ({
  user: getUserById(state, ownProps.userId)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateUser: () => dispatch(updateUser({ id: ownProps.userId, firstName: faker.name.firstName() }))
})

export default connect(mapStateToProps, mapDispatchToProps)(User)