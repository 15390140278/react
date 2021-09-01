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
  useImperativeHandle
} from 'react'
import ReactDOM from 'react-dom'

let ForwardChild = forwardRef(Child)
function Parent() {
  let [number, setNumber] = useState(0)

  let parentRef = useRef()

  function getFocus() {
    parentRef.current.focus()
  }

  return (
    <>
      <ForwardChild ref={parentRef} />
      <button onClick={getFocus}>focus</button>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
    </>
  )
}

// let myInput
function Child(props, parentRef) {
  // let inputRef = React.createRef()
  // let inputRef = useRef()

  // console.log(myInput === inputRef)
  // myInput = inputRef

  // function getFocus() {
  //   inputRef.current.focus()
  // }
  let inputRef = useRef()
  // parentRef.current = { focus() {}}
  // 将子组件的一些属性传给parentRef.current
  useImperativeHandle(parentRef, () => {
    return {
      focus() {
        inputRef.current.focus()
      }
    }
  })

  return (
    <>
      <input ref={inputRef} />
      {/* <button onClick={getFocus}>focus</button> */}
    </>
  )
}

ReactDOM.render(
  <>
    <Parent />
  </>,
  document.getElementById('root')
)
