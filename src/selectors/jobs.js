import { createSelector } from 'reselect'
import createCachedSelector from 're-reselect'
import { transformToArray } from 'helpers/redux'

export const getAddresses = state => state.addresses.entries

export const getAddressByUserId = createSelector(
  getAddresses,
  (state, userId) => userId,//
  (addresses, userId) => {
    console.log('%c find address', 'color: #4286f4;')
    return transformToArray(addresses).find(address => address.userId === userId)
  }
)

// export const getAddressByUserId = createCachedSelector(
//   getAddresses,
//   (state, userId) => userId,//
//   (addresses, userId) => {
//     console.log('%c find address', 'color: #4286f4;')
//     return transformToArray(addresses).find(address => address.userId === userId)
//   }
// )(
//   (state, userId) => userId
// )
