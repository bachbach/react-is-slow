import { connect } from 'react-redux'
import faker from 'faker'
import JobDetails from 'components/JobDetails'
import { getJobByUserId } from 'selectors/jobs'
import { updateJob } from 'ducks/jobs'

const mapStateToProps = (state, ownProps) => ({
  job: getJobByUserId(ownProps.userId)(state)
})

const mapDispatchToProps = dispatch => ({
  updateJob: (id) => dispatch(updateJob({ id, jobDescriptor: faker.name.jobDescriptor() }))
})

export default connect(mapStateToProps, mapDispatchToProps)(JobDetails)