import { createSelector } from 'reselect'
import { transformToArray } from 'helpers/redux';

export const getJobs = state => transformToArray(state.jobs.entries)

export const getJobByUserId = (userId) => createSelector(
  [getJobs],//
  (jobs) => jobs.find(job => job.userId === userId)
)
