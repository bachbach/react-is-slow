import { combineReducers } from 'redux'
import users from './users'
import jobs from './jobs'

const appReducer = combineReducers({
  users,
  jobs
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
