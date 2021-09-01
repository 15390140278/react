function createThunkMiddleware() {
  return ({ dispatch, getState }) =>
    next =>
    action => {
      if (typeof action === 'function') {
        return action(dispatch, getState)
      } else {
        return next(action)
      }
    }
}

let thunk = createThunkMiddleware()

export default thunk
