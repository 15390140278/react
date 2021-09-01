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
  useLayoutEffect
} from 'react'
import ReactDOM from 'react-dom'

function UseLayoutEffectComponent() {
  const [color, setColor] = useState('red')

  // 同步 会阻塞
  useLayoutEffect(() => {
    // alert(color)
    // 不会闪烁
    // document.getElementById('myDiv').style.backgroundColor = 'purple'
  })

  useEffect(() => {
    // alert(color)
    // 会闪烁
    document.getElementById('myDiv').style.backgroundColor = 'purple'
  })

  return (
    <>
      <div id="myDiv" style={{ backgroundColor: color }}>
        颜色
      </div>
      <button onClick={() => setColor('red')}>红</button>
      <button onClick={() => setColor('yellow')}>黄</button>
      <button onClick={() => setColor('blue')}>蓝</button>
    </>
  )
}

ReactDOM.render(
  <>
    <UseLayoutEffectComponent />
  </>,
  document.getElementById('root')
)
