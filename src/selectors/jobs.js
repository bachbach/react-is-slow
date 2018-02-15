import { createSelector } from 'reselect'
import createCachedSelector from 're-reselect'
import { transformToArray } from 'helpers/redux'

export const getAddresses = (state, userId) => state.addresses.entries

export const getAddressByUserId = createCachedSelector(
  (state, userId) => getAddresses(state, userId),
  (state, userId) => userId,//
  (addresses, userId) => {
    console.log('find triggered')
    return transformToArray(addresses).find(address => address.userId === userId)
  }
)(
  (state, userId) => userId
)
