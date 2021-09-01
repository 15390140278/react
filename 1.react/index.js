let batchingStrategy = {
  // 默认是非批量更新模式
  isBatchingUpdates: false,
  // 脏组件 组件的状态改变了
  dirtyComponents: [],
  // 批量更新的方法
  batchedUpdates() {}
}

class Transaction {
  constructor(wraps) {
    this.wraps = wraps || []
  }

  perform(fn) {
    this.wraps.forEach(wrap => wrap.initialize())
    fn.call()
    this.wraps.forEach(wrap => wrap.close())
  }
}

let transaction = new Transaction([
  {
    initialize() {
      // 开启批量更新模式
      batchingStrategy.isBatchingUpdates = true
    },
    close() {
      // 关闭批量更新模式
      batchingStrategy.isBatchingUpdates = false
      // 将脏组件全部更新
      batchingStrategy.dirtyComponents.forEach(component => component.updateComponent())
    }
  }
])

window.trigger = function (event, method) {
  let component = event.target.component
  transaction.perform(component[method].bind(component))
}

class Updater {
  constructor(component) {
    this.component = component
    this.pendingStates = []
  }

  addState(partcialState) {
    this.pendingStates.push(partcialState)
    // 判读是否批量更新，是批量更新，就先把组件缓存起来
    // 不是批量更新，直接更新
    batchingStrategy.isBatchingUpdates ? batchingStrategy.dirtyComponents.push(this.component) : this.component.updateComponent()
  }
}

class Component {
  constructor(props) {
    this.props = props
    this.$updater = new Updater(this)
  }

  renderElement() {
    let htmlStr = this.render()
    let div = document.createElement('div')
    div.innerHTML = htmlStr
    this.domElement = div.children[0]
    // 将组件实例挂到dom元素上
    this.domElement.component = this
    return this.domElement
  }

  mount(container) {
    container.appendChild(this.renderElement())
  }

  setState(partcialState) {
    this.$updater.addState(partcialState)
  }

  updateComponent() {
    this.$updater.pendingStates.forEach(partcialState => Object.assign(this.state, partcialState))
    this.$updater.pendingStates.length = 0
    let oldElement = this.domElement
    let newElement = this.renderElement()
    oldElement.parentElement.replaceChild(newElement, oldElement)
  }
}

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
  }

  add() {
    this.setState({
      number: this.state.number + 1
    })
    console.log(this.state) //0
    this.setState({
      number: this.state.number + 1
    })
    console.log(this.state) //0

    setTimeout(_ => {
      this.setState({
        number: this.state.number + 1
      })
      console.log(this.state) //3

      this.setState({
        number: this.state.number + 1
      })
      console.log(this.state) //4
    })
  }

  render() {
    return `<button onclick="trigger(event,'add')" >${this.props.name}:${this.state.number}</button>`
  }
}
