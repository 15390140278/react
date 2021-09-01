/*
 * @Author: your name
 * @Date: 2021-06-07 16:58:28
 * @LastEditTime: 2021-06-10 15:05:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \2.react\src\index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'
// import LifeCycle from './components/LifeCycle'
// import NewLifeCycle from './components/NewLifeCycle'
// import GetSnapshotBeforeUpdate from './components/GetSnapshotBeforeUpdate'
// import OldContext from './components/context/OldContext'
// import Person from './components/PropTypes'
// import NewContext from './components/context/NewContext'
// import Pure from './components/pure/pure'
// import Func from './components/func/Func'
// import UserInput from './components/hoc/UserInput'
// import EmailInput from './components/hoc/EmailInput'
// import MouseTracker from './components/render-props/MouseTracker'
// import Picture from './components/render-props/Picture'
// import Page from './Modal'
// import Page from './ErrorBoundary'
import Context from './components/context/Context'

// ReactDOM.render(<Pure />, document.getElementById('root'))
// ReactDOM.render(Func(), document.getElementById('root'))
// ReactDOM.render(<Func />, document.getElementById('root'))
// ReactDOM.render(
//   <>
//     <UserInput />
//     <EmailInput />
//   </>,
//   document.getElementById('root')
// )
// ReactDOM.render(<MouseTracker>{props => <Picture {...props} />}</MouseTracker>, document.getElementById('root'))
// render props写法
// ReactDOM.render(<MouseTracker render={props => <Picture {...props} />} />, document.getElementById('root'))
// 高阶组件
// ReactDOM.render(<Picture />, document.getElementById('root'))
ReactDOM.render(<Context />, document.getElementById('root'))
