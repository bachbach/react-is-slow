import { createSelector } from 'reselect'
import { transformToArray } from 'helpers/redux';

export const getAddresses = state => transformToArray(state.addresses.entries)

export const getAddressByUserId = (userId) => createSelector(
  [getAddresses],//
  (addresses) => addresses.find(address => address.userId === userId)
)
