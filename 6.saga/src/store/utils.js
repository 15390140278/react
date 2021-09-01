export const delay = ms => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = Math.random()
      // if (result > 0.5) {
      //   resolve(result)
      // } else {
      //   reject('错误')
      // }
      if (result > 0.5) {
        resolve({
          code: 0,
          data: result
        })
      } else {
        resolve({
          code: 1,
          error: '错误'
        })
      }
    }, ms)
  })
}

export const readFile = function (filename, callback) {
  setTimeout(() => {
    callback(null, filename + "'s content")
  })
}
