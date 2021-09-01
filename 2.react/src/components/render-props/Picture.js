import React, { Component } from 'react'
import MouseTracker from './MouseTracker'

function withMouseTracker(Component) {
  return props => <MouseTracker render={data => <Component {...props} {...data} />} />
}

class Picture extends Component {
  render() {
    return (
      <div>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src="http://localhost:3000/logo192.png" />
        <p>
          当前鼠标位置x:{this.props.x}y:{this.props.y}
        </p>
      </div>
    )
  }
}

export default withMouseTracker(Picture)
