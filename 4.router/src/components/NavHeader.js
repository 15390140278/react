import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class NavHeader extends Component {
  render() {
    return (
      <div>
        <div onClick={() => this.props.history.push('/')}>架构</div>
      </div>
    )
  }
}
export default withRouter(NavHeader)
// export default NavHeader
