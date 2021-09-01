function render(element, parentNode) {
  if (typeof element == 'string' || typeof element == 'number') {
    return parentNode.appendChild(document.createTextNode(element))
  }

  let type, props
  type = element.type
  props = element.props
  // 类组件
  if (type.isReactComponent) {
    let returnElement = new type(props).render()
    type = returnElement.type
    props = returnElement.props
  }
  if (typeof type === 'function') {
    //'Welcome'
    let returnElement = type(props) //Welcome(props)
    type = returnElement.type //'h1'
    props = returnElement.props //null
  }
  let domElement = document.createElement(type) //h1
  for (let propsName in props) {
    if (propsName === 'className') {
      domElement.className = props[propsName]
    } else if (propsName === 'style') {
      let styleObj = props[propsName]
      // for(let attr in styleObj) {
      //   domElement.style[attr] = styleObj[attr]
      // }
      let cssText = Object.keys(styleObj)
        .map(attr => {
          return `${attr.replace(/[A-Z]/g, function () {
            return '-' + arguments[0].toLowerCase()
          })}:${styleObj[attr]}`
        })
        .join(';')
      domElement.style.cssText = cssText
    } else if (propsName === 'children') {
      let children = Array.isArray(props.children) ? props.children : [props.children]
      children.forEach(child => render(child, domElement))
    } else {
      domElement.setAttribute(propsName, props[propsName])
    }
  }
  parentNode.appendChild(domElement)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { render }
