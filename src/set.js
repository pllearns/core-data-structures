'use strict'

export default class Set {
  constructor(initialValues=[]) {
    if ( typeof initialValues  === 'string' ) {
      initialValues = [initialValues]
    }
    this.elements = initialValues
    this.counter = initialValues.length
  }

  add(value) {
    this.counter++
    this.elements.push(value)
    return this.elements
  }

  isEmpty() {
    return (this.counter === 0)
  }

  contains(value) {
    return this.elements.includes(value)
  }

  remove(value) {
    for(let i = 0; i < this.counter; i++) {
      if (this.elements[i] === value){
        this.elements.splice(i, 1)
        return this.elements
      }
    }
  }

  union() {
    
  }
}
