import React, { Component } from 'react'
import PropTypes from 'prop-types'

class JobDetails extends Component {
  updateJob = (id) => () => this.props.updateJob(id)

  render () {
    const { job } = this.props
    console.log('render job')

    return (
      <div>
        <div>{job.jobDescriptor}</div>
        <div>{job.jobArea}</div>
        <div>{job.jobType}</div>
        <button onClick={this.updateJob(job.id)}>update job</button>
      </div>
    )
  }
}

JobDetails.propTypes = {
  job: PropTypes.object,
  updateJob: PropTypes.func
}

export default JobDetails