import React from 'react'
import ReactDom from 'react-dom'

// let element = (
//   <h1 className="title" style={{ color: 'red', fontSize: '50px' }}>
//     hello
//     <span>world</span>
//   </h1>
// )
// 这两者是等价的 babel会把上面的解析为下面的格式
// let element = React.createElement(
//   'h1',
//   {
//     className: 'title',
//     style: {
//       color: 'red',
//       fontSize: '50px'
//     }
//   },
//   'hello',
//   React.createElement('span', null, 'world')
// )

function Welcome(props) {
  return (
    <h1>
      hello{props.name}
      {props.age}
    </h1>
  )
}

class Welcome1 extends React.Component {
  render() {
    return (
      <h1 id="haha">
        hello{this.props.name}
        {this.props.age}
      </h1>
    )
  }
}

const data = {
  name: 'zs',
  age: 18
}

class Clock extends React.Component {
  constructor(props) {
    super(props)

    // 自定义的属性一定都在组件实例上
    // 保留字大部分都在原型上
    // console.log('setState' in this)
    // console.log(this.hasOwnProperty('setState'))
    console.log(this)

    this.state = {
      date: new Date().toLocaleTimeString()
    }
  }

  add = () => {}

  componentDidMount() {
    this.$timer = setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString()
      })
    }, 1000)
  }

  render() {
    return <h1>{this.state.date}</h1>
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { number: 0 }
  }

  add = () => {
    this.setState(state => {
      // 修改前的状态
      console.log(state) //3. 0
      return {
        number: state.number + 1
      }
    })
    console.log(this.state) //1. 0
    this.setState(state => {
      // 修改前的状态
      console.log(state) // 4. 1
      return {
        number: state.number + 1
      }
    })
    console.log(this.state) //2. 0
  }

  render() {
    return (
      <>
        <h1>{this.state.number}</h1>
        <button onClick={this.add}>+</button>
      </>
    )
  }
}

function creatRef() {
  return {
    current: null
  }
}

class Sum extends React.Component {
  constructor(props) {
    super(props)
    this.numA = creatRef()
    this.numB = creatRef()
    this.result = creatRef()
  }

  add = () => {
    let numA = this.numA.current.value
    let numB = this.numB.current.value
    let result = numA + numB
    this.result.current.value = result
  }

  render() {
    return (
      <>
        <input ref={this.numA} />+<input ref={this.numB} />
        <button onClick={this.add}>=</button>
        <input ref={this.result} />
      </>
    )
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.TextInput = React.createRef()
    this.state = {
      text: '123'
    }
  }

  getFocus = () => {
    this.TextInput.current.focus()
    // console.log(this.TextInput)
  }

  textChange = text => {
    this.setState({
      text
    })
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <>
        {/* this.TextInput.current 指向TextInput实例 */}
        {/* ref只能引用类组件，不能引用函数组件 */}
        {/* <TextInput2 ref1={this.TextInput} /> */}
        {/* 必须包装一下 函数组件不能用关键字ref,需要自己命名一个 */}
        {/* <TextInput3 ref1={this.TextInput} /> */}
        <input value={this.state.name} onChange={this.handleChange} />
        <Son name={this.state.name} age={this.props.age} textChange={this.textChange} />
        <button onClick={this.getFocus}>focus</button>
      </>
    )
  }
}

class TextInput extends React.Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()
  }

  render() {
    return (
      <>
        <input ref={this.input} />
      </>
    )
  }
}

// 不包装
function TextInput2({ ref1: ref }) {
  return (
    <>
      <input ref={ref} />
    </>
  )
}

// 包装
// function TextInput2(props, ref) {
//   return (
//     <>
//       <input ref={ref} />
//     </>
//   )
// }

let TextInput3 = forwardRef1(TextInput2)

function forwardRef1(funcComponent) {
  return function (props) {
    return funcComponent(props, props.ref1)
  }
  // class Comp extends React.Component {
  //   render() {
  //     return funcComponent(this.props, this.props.ref1)
  //   }
  // }

  // return Comp
}

class Son extends React.Component {
  render() {
    return (
      <>
        <h1>
          {this.props.name}
          {this.props.age}
        </h1>
        {/* <input ref="input" />
        <button onClick={() => this.props.textChange(this.refs['input'].value)}>改变父级状态</button> */}
      </>
    )
  }
}

// 两种写法
// ReactDom.render(React.createElement(Welcome, data), document.getElementById('root'))
// ReactDom.render(<Welcome {...data} />, document.getElementById('root'))
// ReactDom.render(<Welcome1 {...data} />, document.getElementById('root'))
// ReactDom.render(<Clock />, document.getElementById('root'))
// ReactDom.render(<Counter />, document.getElementById('root'))
// ReactDom.render(<Sum />, document.getElementById('root'))
ReactDom.render(<Form age={18} />, document.getElementById('root'))
