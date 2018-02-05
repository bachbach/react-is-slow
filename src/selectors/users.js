import { createSelector } from 'reselect'
import { transformToArray } from 'helpers/redux'

export const getUsers = state => transformToArray(state.users.entries)

export const userId = (state, id) => state.users.entries[id]

export const getUserById = createSelector(
  [userId],//
  (user) => user
)

export const sortUsersByAge = createSelector(
  getUsers,
  users => {
    console.log('sort triggered')
    return users.sort((a, b) => a.age - b.age)
  }
)