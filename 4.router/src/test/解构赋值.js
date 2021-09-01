// let obj = {
//   name: 'zs',
//   age: 18,
//   like: 'haha'
// }

// // let { like = 'play', name, age } = obj
// // console.log(like, name, age) // 'haha' 'zs' 18
// let { like, ...res } = obj
// console.log(like)
// console.log(res)

let arr = [1, 2, 3]
// let [a, b, c] = arr
// console.log(a, b, c)
let [...res] = arr
console.log(res)
