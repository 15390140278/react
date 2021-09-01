import React, { Component } from 'react'

class MouseTracker extends Component {
  state = {
    x: 0,
    y: 0
  }

  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  render() {
    // return <div onMouseMove={this.handleMouseMove}>{this.props.children(this.state)}</div>
    // render props写法
    return <div onMouseMove={this.handleMouseMove}>{this.props.render(this.state)}</div>
  }
}

export default MouseTracker
