import { transformById, transformToArray } from 'helpers/redux';
import { FETCH_USERS } from './users'

export const UPDATE_JOB = Symbol('UPDATE_JOB')

const updateJobSuccess = job => ({ type: UPDATE_JOB, job })

export const updateJob = (job) => {
  return dispatch => {
    return dispatch(updateJobSuccess(job))
  }
}

const initState = {
  entries: {}
}

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      const jobs = transformToArray(action.users).map(user => {
        return user.job
      })
      return {
        ...state,
        entries: {
          ...state.entries,
          ...transformById(jobs, 'id')
        }
      }
    case UPDATE_JOB:
      console.log(action)
      return {
        ...state,
        entries: {
          ...state.entries,
          [action.job.id]: {
            ...state.entries[action.job.id],
            ...action.job
          }
        }
      }
    default:
      return state
  }
}