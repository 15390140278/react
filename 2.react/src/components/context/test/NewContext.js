import React, { Component } from 'react'
// import PropTypes from 'prop-types'

const ThemeContext = React.createContext()
// const ThemeContext = createContext()
// ThemeContext = {Provider, Consumer}

// function createContext() {
//   class Provider extends Component {
//     static value
//     constructor(props) {
//       super(props)
//       Provider.value = props.value
//     }
//     render() {
//       return this.props.children
//     }
//   }

//   return { Provider }
// }

class Page extends Component {
  state = {
    color: 'gray'
  }

  setColor = color => {
    this.setState({
      color
    })
  }

  render() {
    let ctx = {
      color: this.state.color,
      setColor: this.setColor
    }
    return (
      <ThemeContext.Provider value={ctx}>
        <div style={{ border: '1px solid red', padding: '5px' }}>
          Page
          <Header></Header>
          <Main></Main>
        </div>
      </ThemeContext.Provider>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <div style={{ border: '1px solid red', padding: '5px' }}>
        Header
        <Title></Title>
      </div>
    )
  }
}

class Title1 extends Component {
  static contextType = ThemeContext

  render() {
    // this.context = Title.contextType.Provider.value

    return <div style={{ border: '1px solid red', padding: '5px', color: this.context.color }}>Title</div>
  }
}

function Title(props) {
  return (
    <ThemeContext.Consumer>
      {
        //  <ThemeContext.Provider value={ctx}>
        value => (
          <div style={{ border: '1px solid red', padding: '5px', color: value.color }}>Title</div>
        )
      }
    </ThemeContext.Consumer>
  )
}

class Main extends Component {
  render() {
    return (
      <div style={{ border: '1px solid red', padding: '5px' }}>
        Main
        <Content></Content>
      </div>
    )
  }
}

class Content1 extends Component {
  static contextType = ThemeContext

  render() {
    return (
      <div style={{ border: '1px solid red', padding: '5px', color: this.context.color }}>
        Content
        <button onClick={() => this.context.setColor('red')}>变红</button>
        <button onClick={() => this.context.setColor('green')}>变绿</button>
      </div>
    )
  }
}

function Content(props) {
  return <ThemeContext.Consumer>
    {
      value => (
        <div style={{ border: '1px solid red', padding: '5px', color: value.color }}>
        Content
        <button onClick={() => value.setColor('red')}>变红</button>
        <button onClick={() => value.setColor('green')}>变绿</button>
      </div>
      )
    }
  </ThemeContext.Consumer>
}

export default Page
