import counter from './counter'
import counter1 from './counter1'
import counter2 from './counter2'
import { combineReducers } from '../../redux'
// import { combineReducers } from 'redux'

let reducers = combineReducers({
  counter1,
  counter2
})

// export default reducers
export default counter
