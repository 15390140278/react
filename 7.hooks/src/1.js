import React, { useState, memo, useMemo, useCallback } from 'react'
import ReactDOM from 'react-dom'

function Counter1() {
  let [number, setNumber] = useState(0)

  return (
    <>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </>
  )
}

function Counter2() {
  let [number, setNumber] = useState(0)

  return (
    <>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </>
  )
}

function Counter3() {
  let [number, setNumber] = useState(0)

  function lazy() {
    setTimeout(() => {
      // setNumber(number + 1)
      setNumber(number => number + 1)
    }, 3000)
  }

  return (
    <>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={lazy}>lazy</button>
    </>
  )
}

function Counter4(props) {
  function getInitState() {
    return {
      number: props.number
    }
  }

  // 惰性初始化
  let [counter, setCounter] = useState(getInitState)

  return (
    <>
      <p>{counter.number}</p>
      <button onClick={() => setCounter({ number: counter.number + 1 })}>+</button>
    </>
  )
}

function SubCounter({ onClick = () => {}, data = { number: 0 } }) {
  console.log('SubCounter')
  return <button onClick={onClick}>{data.number}</button>
}

// pureComponent
SubCounter = memo(SubCounter)
function Counter6() {
  console.log('Counter6')
  let [number, setNumber] = useState(0)
  let [name, setName] = useState('计数器')
  // const data = { number }
  const data = useMemo(
    () => ({
      number
    }),
    [number]
  )

  // const addClick = () => {
  //   setNumber(number => number + 1)
  // }
  const addClick = useCallback(() => {
    setNumber(number + 1)
  }, [number])

  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <SubCounter data={data} onClick={addClick} />
    </>
  )
}

ReactDOM.render(
  <>
    <Counter6 />
  </>,
  document.getElementById('root')
)
