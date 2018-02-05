import { combineReducers } from 'redux'
import users from './users'
import addresses from './addresses'

const appReducer = combineReducers({
  users,
  addresses
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
