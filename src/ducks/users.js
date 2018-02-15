import { transformById } from 'helpers/redux';
import { omit } from 'ramda'
import userFactory from 'spec/factories/user'

export const FETCH_USERS = Symbol('FETCH_USERS')

export const FETCH_USER = Symbol('FETCH_USER')

export const UPDATE_USER = Symbol('UPDATE_USER')

const fetchUsersSuccess = users => ({ type: FETCH_USERS, users })

const updateUserSuccess = user => ({ type: UPDATE_USER, user })

export const fetchUsers = () => {
  return dispatch => {
    const data = []
    for (let i = 0; i < 4; i++) {
      data.push(userFactory())
    }

    return dispatch(fetchUsersSuccess(data))
  }
}

export const updateUser = (user) => {
  return dispatch => {
    return dispatch(updateUserSuccess(user))
  }
}

const initState = {
  entries: {}
}

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        entries: {
          ...state.entries,
          ...transformById(action.users.map(user => (omit(['address'], user))))
        }
      }
    case FETCH_USER:
      return {
        ...state,
        entries: {
          ...state.entries,
          [action.user.id]: action.user
        }
      }
    case UPDATE_USER:
      console.log('action', action)
      return {
        ...state,
        entries: {
          ...state.entries,
          [action.user.id]: {
            ...state.entries[action.user.id],
            ...action.user
          }
        }
      }
    default:
      return state
  }
}