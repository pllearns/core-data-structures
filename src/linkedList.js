'use strict'

export default class LinkedList {
  constructor(initialValues=[]) {
    if ( typeof initialValues  === 'string' ) {
      initialValues = [initialValues]
    }
    this.elements = initialValues
    this.counter = initialValues.length
  }

  getHeadNode(value) {
    this.counter++
    this.elements.push(value)
    return this.elements
  }

  getTailNode(value) {
    this.counter++
    this.elements.push(value)
    return this.elements
  }

  contains(value) {
    return this.elements.includes(value)
  }

  find(value) {
    return this.elements.includes(value)
  }

  insert(value) {
    return this.elements.includes(value)
  }

  insertFirst(value) {
    return this.elements.includes(value)
  }

  insertBefore(value) {
    return this.elements.includes(value)
  }

  insertAfter(value) {
    return this.elements.includes(value)
  }

  remove(value) {
    return this.elements.includes(value)
  }

  removeFirst(value) {
    return this.elements.includes(value)
  }

  isEmpty() {
    return (this.counter === 0)
  }

  size() {
    return (this.counter === 0)
  }

  clear() {
    return (this.counter === 0)
  }


}
