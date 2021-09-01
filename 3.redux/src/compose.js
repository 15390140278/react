/*
 * @Author: your name
 * @Date: 2021-06-10 21:55:17
 * @LastEditTime: 2021-06-10 21:59:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \3.redux\src\compose.js
 */
export default function compose(...args) {
  if (args.length == 0) {
    return args => args
  }
  if (args.length == 1) {
    return args[0]
  }
  return args.reduce((a, b) => args => a(b(args)))
}

// function add1(v) {
//   return 1 + v
// }

// function add2(v) {
//   return 2 + v
// }
// console.log(compose(add1, add2)(3))
