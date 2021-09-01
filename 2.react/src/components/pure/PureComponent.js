import React, { Component } from 'react'

class PureComponent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !shadowEqual(this.props, nextProps) || !shadowEqual(this.state, nextState)
  }

  render() {
    return <div></div>
  }
}

// 浅比较两个对象是否相等
function shadowEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true
  }
  // 不是对象
  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return false
  }
  let keys1 = Object.keys(obj1)
  let keys2 = Object.keys(obj2)
  if (keys1.length !== keys2.length) {
    return false
  }
  for (let key1 of keys1) {
    if (!obj2.hasOwnProperty(key1) || obj2[key1] !== obj1[key1]) {
      return false
    }
  }
  return true
}

export default PureComponent
