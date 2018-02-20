import { createSelector } from 'reselect'
import createCachedSelector from 're-reselect'
import { transformToArray } from 'helpers/redux'

export const getAddresses = (state, userId) => state.addresses.entries

export const getUserId = (state, userId) => userId

export const getAddressByUserId = createSelector(
  getAddresses,
  getUserId,
  (addresses, userId) => {
    // console.log('%c find address', 'color: #4286f4;')
    return transformToArray(addresses).find(address => address.userId === userId)
  }
)

// export const getAddressByUserId = createCachedSelector(
//   getAddresses,
//   getUserId,
//   (addresses, userId) => {
//     console.log('%c find address', 'color: #4286f4;')
//     return transformToArray(addresses).find(address => address.userId === userId)
//   }
// )(
//   getUserId
// )
