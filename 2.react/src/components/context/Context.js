/*
 * @Author: your name
 * @Date: 2021-06-10 10:37:53
 * @LastEditTime: 2021-06-10 16:01:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \2.react\src\components\context\Context.js
 * 总结：context 三种用法
 * 1、首先建立一个上下文MyContex = React.createContext(defaultValue)
 * 2、哪里需要用这个上下文，
 * class组件可以通过static contextType = MyContex 之后通过this.context来使用
 * <MyContex.Provider value={}>
 *  <MyClass/>
 * </MyContex.Provider>
 * MyClass组件中通过函数节点拿到上下文，如果上下文有默认值，不用Provider包装
 * <MyContex.Consumer>
 * {
 *  value => ...
 * }
 * </MyContex.Consumer>
 */
import React, { Component } from 'react'

// function Page(props) {
//   return <PageLayout render={data => <NavigationBar render={data => <div>user:{props.user}</div>} />} />
// }

// function PageLayout(props) {
//   return <>{props.render()}</>
// }

// function NavigationBar(props) {
//   return <>{props.render()}</>
// }

// 1
// const MyContext = React.createContext()

// class MyClass extends React.Component {
//   render() {
//     return (
//       <MyContext.Consumer>
//         {value => (
//           <p>
//             name:{value.name},age: {value.age}
//           </p>
//         )}
//       </MyContext.Consumer>
//     )
//   }
// }
// function Page() {
//   let value = {
//     name: 'zs',
//     age: 18
//   }
//   return (
//     <MyContext.Provider value={value}>
//       <div>haha</div>
//       <MyClass />
//     </MyContext.Provider>
//   )
// }

// 2
// const MyContext = React.createContext({
//   name: 'zs',
//   age: 18
// })

// class MyClass extends React.Component {
//   static contextType = MyContext
//   render() {
//     console.log(this.context)
//     return <div>123</div>
//   }
// }

// 3
// const MyContext = React.createContext({
//   name: 'zs',
//   age: 18
// })

// function Page() {
//   return (
//     <div>
//       <p>123</p>
//       <MyClass></MyClass>
//     </div>
//   )
// }

// function MyClass1() {
//   return (
//     <MyContext.Consumer>
//       {value => (
//         <p>
//           {value.name},{value.age}
//         </p>
//       )}
//     </MyContext.Consumer>
//   )
// }

// class MyClass extends Component {
//   static contextType = MyContext

//   render() {
//     return (
//       <div>
//         <p>
//           name:{this.context.name},age{this.context.age}
//         </p>
//       </div>
//     )
//   }
// }

// 4 context传函数
// const MyContex = React.createContext()

// class Page extends Component {
//   changeColor() {
//     this.setState({
//       color: 'blue'
//     })
//   }

//   render() {
//     return (
//       <MyContex.Provider value={{ changeColor: this.changeColor }}>
//         <MyClass />
//       </MyContex.Provider>
//     )
//   }
// }

// class MyClass extends Component {
//   state = {
//     color: 'red'
//   }

//   render() {
//     return (
//       <MyContex.Consumer>
//         {value => (
//           <div style={{ color: this.state.color }} onClick={value.changeColor.bind(this)}>
//             123
//           </div>
//         )}
//       </MyContex.Consumer>
//     )
//   }
// }

// 5 消费多个context
const NameContext = React.createContext({
  name: 'zs'
})
const AgeContext = React.createContext({
  age: 18
})

function Page() {
  return (
    <NameContext.Consumer>
      {name => (
        <AgeContext.Consumer>
          {age => (
            <p>
              <p>{name.name}</p>
              <p>{age.age}</p>
            </p>
          )}
        </AgeContext.Consumer>
      )}
    </NameContext.Consumer>
  )
}

export default Page
