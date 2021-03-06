import * as types from '../action-type'
let initState = {}

export default function (state = initState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        token: action.payload
      }
    case types.LOGIN_ERROR:
      return {
        token: action.error
      }
    case types.LOGOUT_SUCCESS:
      return {}
    default:
      return state
  }
}
