export const mergeProps = (stateProps, dispatchProps, ownProps) => Object.assign({}, stateProps, dispatchProps, ownProps)

export const transformById = (collection, idKey = 'id') =>
  collection.reduce((hash, entity) => {
    hash[entity[idKey]] = entity

    return hash
  }, {})

export const transformToArray = collection => Object.keys(collection).map(id => collection[id])

export const transformToIdsArray = arr => arr.map(element => element.id)

export const veryAdvancedCalculation = () => []
