import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default function (Component, name) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = { value: '' }
    }

    componentWillMount() {
      this.setState({
        value: localStorage.getItem(name)
      })
    }

    render() {
      return <Component {...this.props} value={this.state.value} />
    }
  }
}
