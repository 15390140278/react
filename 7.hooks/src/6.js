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

class Counter extends Component {
  state = {
    number: 0
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        number: this.state.number + 1
      })
    }, 1000)
  }

  // render() {
  //   return (
  //     <>
  //       <p>{this.state.number}</p>
  //     </>
  //   )
  // }
  // render props
  render() {
    return this.props.render(this.state)
  }
}

// 高阶组件
function withCounter(Component) {
  return class extends Component {
    state = {
      number: 0
    }

    componentDidMount() {
      setInterval(() => {
        this.setState({
          number: this.state.number + 1
        })
      }, 1000)
    }

    render() {
      return <Component number={this.state.number} />
    }
  }
}
class App1 extends Component {
  render() {
    return <Counter render={props => <p>{props.number}</p>} />
  }
}

class App2 extends Component {
  render() {
    return <Counter render={props => <p>{props.number}</p>} />
  }
}

// App1 = withCounter(App1)
// App2 = withCounter(App2)

ReactDOM.render(
  <>
    <App1 />
    <App2 />
  </>,
  document.getElementById('root')
)
