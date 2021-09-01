// 一个中间件
// function mid(args) {
//   return function (next) {
//     return function () {
//       return next(args)
//     }
//   }
// }

// function A(a) {
//   return a
// }

// function applyMiddle(middle) {
//   return function (a) {
//     return function (b) {
//       middle = middle(a + b)
//       middle = middle(A)
//       return middle
//     }
//   }
// }

// const res = applyMiddle(mid)(1)(2)

// console.log(res())

// 多个中间件
function mid1(args) {
  return function (next) {
    return function res() {
      console.log('1')
      return next(args)
    }
  }
}

function mid2(args) {
  return function (next) {
    return function () {
      console.log('2')
      return next(args)
    }
  }
}

function mid3(args) {
  return function (next) {
    return function () {
      console.log('3')
      return next(args)
    }
  }
}

function A(a) {
  return a
}

function applyMiddle(...middles) {
  return function (a) {
    return function (b) {
      const chain = middles.map(middle => middle(a + b))
      A = compose(...chain)(A)
      return A
    }
  }
}

let res = applyMiddle(mid1, mid2, mid3)(1)(2)
console.log(res())

function compose(...args) {
  return args.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  )
}
