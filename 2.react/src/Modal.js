/*
 * @Author: your name
 * @Date: 2021-06-08 16:22:53
 * @LastEditTime: 2021-06-10 10:08:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \2.react\src\Modal.js
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Modal1 extends Component {
  render() {
    return ReactDOM.createPortal(this.props.children, document.getElementById('modal-root'))
  }
}

class Modal extends Component {
  render() {
    return ReactDOM.createPortal(this.props.children, document.getElementById('modal-root'))
  }
}

export default class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      number: 0
    }
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  add = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  render() {
    return (
      <>
        <button onClick={this.toggleModal}>显示/关闭</button>
        {this.state.showModal && (
          <Modal>
            <p>哈哈{this.state.number}</p>
            <button onClick={this.add}>+</button>
          </Modal>
        )}
      </>
    )
  }
}
