import { connect } from 'react-redux'
import faker from 'faker'
import User from 'components/User'
import { updateUser } from 'ducks/users'

const mapDispatchToProps = (dispatch) => ({
  updateUser: (id) => dispatch(updateUser({ id, firstName: faker.name.firstName() }))
})

export default connect(null, mapDispatchToProps)(User)