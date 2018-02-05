import { transformById, transformToArray } from 'helpers/redux'
import { FETCH_USERS } from './users'

export const UPDATE_ADDRESS = Symbol('UPDATE_ADDRESS')

const updateAddressSuccess = address => ({ type: UPDATE_ADDRESS, address })

export const updateAddress = (address) => {
  return dispatch => {
    return dispatch(updateAddressSuccess(address))
  }
}

const initState = {
  entries: {}
}

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      const addresses = transformToArray(action.users).map(user => {
        return user.address
      })
      return {
        ...state,
        entries: {
          ...state.entries,
          ...transformById(addresses, 'id')
        }
      }
    case UPDATE_ADDRESS:
      return {
        ...state,
        entries: {
          ...state.entries,
          [action.address.id]: {
            ...state.entries[action.address.id],
            ...action.address
          }
        }
      }
    default:
      return state
  }
}