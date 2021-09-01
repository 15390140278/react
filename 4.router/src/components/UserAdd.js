import React, { Component } from 'react'
import { Prompt } from 'react-router-dom'
export default class UserAdd extends Component {
  state = { blocking: false }

  render() {
    return (
      <>
        <Prompt when={this.state.blocking} message={location => `你确定你要跳转到${location.pathname}吗`} />
        <div onClick={() => this.setState({ blocking: true })}>开启blocking</div>
      </>
    )
  }
}
