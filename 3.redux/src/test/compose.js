/*
 * @Author: your name
 * @Date: 2021-06-10 20:05:17
 * @LastEditTime: 2021-06-10 20:31:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \3.redux\src\test\1.js
 */

function add1(res) {
  return 1 + res
}

function add2(res) {
  return 2 + res
}

function add3(res) {
  return 3 + res
}

// function add(x) {
//   return function (y) {
//     return function (z) {
//       return x + y + z
//     }
//   }
// }

function add(...fns) {
  if (fns.length == 0) {
    return args => args
  }
  if (fns.length == 1) {
    return fns[0]
  }

  return fns.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  )
}

// const res = add1(add2(add3('haha')))
// const res = add(add1,add2,add3)('haha')
const res = add(add1, add2, add3)('haha')

console.log(res)
