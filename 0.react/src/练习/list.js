import React from 'react'
import ReactDom from 'react-dom'

/**
 * render直接传数组的情况
 *
 */

function List() {
  return [1, 2, 3].map(item => <p>{item}</p>)
}

let element = [<p>1</p>, <p>2</p>, <p>3</p>]
// let element = List()
// let element = [1, 2, 3].map(item => (
//     <p>{item}</p>
//   ))

// ReactDom.render(<div>{element}</div>, document.getElementById('root'))
ReactDom.render(<>{element}</>, document.getElementById('root'))

// let element = React.createElement('p', {}, [
//   React.createElement('p', {}, '1'),
//   React.createElement('p', {}, '1'),
//   React.createElement('p', {}, '1')
// ])
// ReactDom.render(element, document.getElementById('root'))
