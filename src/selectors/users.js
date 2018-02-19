import { createSelector } from 'reselect'
import { veryAdvancedCalculation } from 'helpers/redux'

export const getUsers = state => state.users.entries

export const getAddresses = state => state.addresses.entries

export const sortUsersByEverything = createSelector(
  [getUsers, getAddresses],
  (users, addresses) => {
    console.log('sort triggered')
    return veryAdvancedCalculation(users, addresses)
  }
)