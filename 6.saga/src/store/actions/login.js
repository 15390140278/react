import * as types from '../action-type'

export default {
  login(username, password) {
    return {
      type: types.LOGIN,
      payload: {
        username,
        password
      }
    }
  },
  logout() {
    return {
      type: types.LOGOUT
    }
  }
}
