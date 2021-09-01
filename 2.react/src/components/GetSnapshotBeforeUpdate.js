import React, { Component } from 'react'

class GetSnapshotBeforeUpdate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
    this.wrapper = React.createRef()
  }

  componentDidMount() {
    setInterval(_ => {
      this.setState({
        // messages: [this.state.messages.length, ...this.state.messages]
        messages: [...this.state.messages, this.state.messages.length]
      })
    }, 1000)
  }

  getSnapshotBeforeUpdate() {
    // 返回更新前，内容的高度 componentDidUpdate的参数prevScrollHeight
    // 返回值被componentDidUpdate的第三个参数接收
    return this.wrapper.current.scrollHeight
  }

  componentDidUpdate(prevProps, prevState, prevScrollHeight) {
    // this.wrapper.current.scrollTop = this.wrapper.current.scrollTop + (this.wrapper.current.scrollHeight - prevScrollHeight)
  }

  render() {
    let style = {
      height: '100px',
      width: '200px',
      border: '1px solid red',
      overflow: 'auto'
    }

    return (
      <ul style={style} ref={this.wrapper}>
        {this.state.messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    )
  }
}

export default GetSnapshotBeforeUpdate
