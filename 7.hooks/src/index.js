import React, {
  useState,
  memo,
  useMemo,
  useCallback,
  useContext,
  useReducer,
  useEffect,
  createContext,
  useRef,
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  Component
} from 'react'
import ReactDOM from 'react-dom'

// 自定义hook 共享逻辑，不共享状态
function useNumber() {
  let [number, setNumber] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setNumber(number => number + 1)
    }, 1000)
  }, [])

  return [number, setNumber]
}

function Counter1() {
  let [number, setNumber] = useNumber()
  return (
    <div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
    </div>
  )
}

function Counter2() {
  let [number, setNumber] = useNumber()
  return (
    <div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
    </div>
  )
}

ReactDOM.render(
  <>
    <Counter1 />
    <Counter2 />
  </>,
  document.getElementById('root')
)
