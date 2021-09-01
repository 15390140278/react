import * as types from '../action-type'

let initState = {
  number: 0
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initState, action) {
  switch (action.type) {
    case types.INCREMENT:
      console.log('---------4-----------')
      return { number: state.number + 1 }
    case types.DECREMENT:
      return { number: state.number - 1 }
    default:
      return state
  }
}
