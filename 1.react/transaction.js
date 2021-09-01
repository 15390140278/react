class Transaction {
  constructor(wraps) {
    this.wraps = wraps || []
  }

  perform(fn) {
    this.wraps.forEach(wrap => wrap.initial())
    fn.call()
    this.wraps.forEach(wrap => wrap.close())
  }
}

function a() {
  console.log('a')
}

let transaction = new Transaction([
  {
    initial() {
      console.log('initial1')
    },
    close() {
      console.log('close1')
    }
  },
  {
    initial() {
      console.log('initial2')
    },
    close() {
      console.log('close2')
    }
  }
])

transaction.perform(a)
