import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
// 引入中间件生成方法
import createSagaMiddleware from 'redux-saga'
// import createSagaMiddleware from '../redux-saga'

import rootSaga from './saga'

// 生成saga中间件
let sagaMiddleware = createSagaMiddleware()
// let store = createStore(reducer)
// 使用中间级并创建仓库
let store = applyMiddleware(sagaMiddleware)(createStore)(reducers)
// 启动中间件 自动执行generator
sagaMiddleware.run(rootSaga)
window.store = store
export default store
