import { connect } from 'react-redux'
import faker from 'faker'
import AddressDetails from 'components/AddressDetails'
import { getAddressByUserId } from 'selectors/addresses'
import { updateAddress } from 'ducks/addresses'

const mapStateToProps = (state, ownProps) => ({
  address: getAddressByUserId(state, ownProps.userId)
})

const mapDispatchToProps = dispatch => ({
  updateAddress: (id) => dispatch(updateAddress({ id, streetAddress: faker.address.streetAddress() }))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddressDetails)