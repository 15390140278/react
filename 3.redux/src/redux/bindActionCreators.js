// 重构actions里的方法
function bindActionCreator(actionCreator, dispatch) {
  // increment dispatch 重构increment
  // return function 替换increment
  return function () {
    return dispatch(actionCreator.apply(this, arguments))
  }
}

// 预处理actions
const bindActionCreators = function (actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch)
  }
  const boundActionCreators = {}
  for (const key in actionCreators) {
    boundActionCreators[key] = bindActionCreator(actionCreators[key], dispatch)
  }
  return boundActionCreators
}

export default bindActionCreators
