import React, { Component } from 'react'

export default class Login extends Component {
  handleLogin = () => {
    localStorage.setItem('login', 'true')
    if (this.props.location.state) {
      // 去Protect页面
      this.props.history.push(this.props.location.state.from)
    } else {
      // 去首页
      this.props.history.push('/')
    }
  }

  render() {
    return <button onClick={this.handleLogin}>登录</button>
  }
}
