export default function createSagaMiddleware() {
  function createChannel() {
    let observer = {}
    function subscribe(actionType, callback) {
      observer[actionType] = callback //next
    }
    function publish(action) {
      if (observer[action.type]) {
        // next里面会递归调用
        // 先删再绑定
        let next = observer[action.type] //next
        delete observer[action.type]
        next(action)

        // 先绑定再删
        // observer[action.type]()
        // delete observer[action.type]
      }
    }

    return {
      subscribe,
      publish
    }
  }

  let channel = createChannel()
  function sagaMiddleware({ dispatch, getState }) {
    sagaMiddleware.run = run
    function run(generator, callback) {
      let it = typeof generator[Symbol.iterator] === 'function' ? generator : generator()
      function next(action) {
        let { value: effect, done } = it.next(action)
        if (!done) {
          if (typeof effect[Symbol.iterator] === 'function') {
            run(effect) //如果是一个迭代器直接传入run方法执行
            next()
          } else if (typeof effect.then === 'function') {
            effect.then(next)
          } else {
            switch (effect.type) {
              case 'TAKE': //{type: 'TAKE', actionType: ASYNC_INCREMENT}
                // 订阅
                channel.subscribe(effect.actionType, next)
                break
              case 'PUT': //{type: 'PUT', action: {type: INCREMENT}}
                dispatch(effect.action)
                next()
                break
              case 'FORK':
                let newTask = effect.task() //iterator
                // run 开启新的子进程
                run(newTask)
                next(newTask) //自己的saga会立刻继续执行而不会在此等待
                break
              case 'CANCEL':
                // iterator.return() 直接结束任务
                effect.task.return('任务直接结束')
              case 'CALL':
                effect.fn(...effect.args).then(next)
              case 'CPS':
                effect.fn(...effect.args, next)
              case 'ALL':
                function times(cb, length) {
                  let count = 0
                  return function () {
                    if (++count === length) {
                      cb()
                    }
                  }
                }

                let fns = effect.fns
                let done = times(next, fns.length)
                effect.fns.forEach(fn => run(fn, done))
                next()
                break
              default:
                break
            }
          }
        } else {
          callback && callback()
        }
      }

      next()
    }

    return function (next) {
      return function (action) {
        // 发布
        channel.publish(action)
        next(action)
      }
    }
  }
  return sagaMiddleware
}
