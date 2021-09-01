import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default function (Component) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        value: ''
      }
    }

    componentWillMount() {
      fetch('http://localhost:3000/translate.json')
        .then(res => res.json())
        .then(res => {
          this.setState({
            value: res[this.props.value]
          })
        })
    }

    render() {
      return <Component {...this.props} value={this.state.value} />
    }
  }
}
