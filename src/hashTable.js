export default class HashTable {
  constructor(initialValues=[]) {
    this.key = 0
    this.items = {}
    let obj = []
    for (let n in obj) {
      if(obj.hasOwnProperty(n)) {
        this.items[n] = obj[n]
        this.length++
      }
    }

  }

  put(key, value) {
    let elements
    if (this.put(key)) {
      elements = this.items[key]
    } else {
      this.length++
    }
    this.items[key] = value
    return elements
  }

  get(value) {

    return this.elements
  }
  //
  // contains(value) {
  //   return this.elements.includes(value)
  // }
  //
  // iterate(key, value) {
  //   return this.elements.includes(value)
  // }
  //
  // remove(value) {
  //   return this.elements.includes(value)
  // }
  //
  // size() {
  //   return this.elements.includes(value)
  // }
  //
  // hash(value) {
  //   return this.elements.includes(value)
  // }
}
