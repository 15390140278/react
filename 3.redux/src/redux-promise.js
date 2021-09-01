function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'
}

export default function ({ dispatch, getState }) {
  return next => acion => {
    return isPromise(acion.payload)
      ? acion.payload
          .then(result => {
            dispatch({ ...acion, payload: result })
          })
          .catch(error => {
            dispatch({ ...acion, payload: error, error: true })
            return Promise.reject(error)
          })
      : next(action)
  }
}
