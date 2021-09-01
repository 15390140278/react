export default function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return false
  }
  let proto = obj
  while (Object.getPrototypeOf(proto)) {
    proto = Object.getPrototypeOf(proto)
  }
  // obj.__proto__ = Object.prototype 纯对象
  return Object.getPrototypeOf(obj) === proto
}
