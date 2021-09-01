import React, { useState, memo, useMemo, useCallback, useContext, useReducer, useEffect, createContext } from 'react'
import ReactDOM from 'react-dom'

function Counter1() {
  let [number, setNumber] = useState(0)
  // 每次渲染完成后执行
  useEffect(() => {
    document.title = `${number}`
  })

  return (
    <>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </>
  )
}

function Counter() {
  let [number, setNumber] = useState(0)
  // 每次渲染完成后执行
  useEffect(() => {
    const $timer = setInterval(() => {
      setNumber(number => number + 1)
    }, 1000)

    // 清除副作用
    return () => {
      clearInterval($timer)
    }
  }, [number]) //这个数组表示effct依赖的变量，只有当这个变量发生改变之后才会重新执行effect

  // useEffect(() => {
  //   const $timer = setInterval(() => {
  //     setNumber(number => number + 1)
  //   }, 1000)
  // }, [])

  return (
    <>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </>
  )
}

ReactDOM.render(
  <>
    <Counter />
  </>,
  document.getElementById('root')
)
