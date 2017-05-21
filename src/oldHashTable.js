class Node {
  constructor(key, value) {
    this.key = key,
    this.value = value,
    this.next = null
  }
}

export default class HashTable {
  constructor() {
    this._length = 0
    this.valueStore = []
  }

  hashFunction(key) {
    let sum = 0
    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i)
    }
    return sum % 3550
  }

  put(key, value) {
    let newNode = new Node(key, value)
    let hash = this.hashFunction(key)

    if(!this.valueStore[hash]) {
      this.valueStore[hash] = newNode
    } else {
      this.chain(hash, newNode)
    }
    ++this._length
  }

  size() {
    return this._length
  }

  get(key) {
    let hash = this.hashFunction(key)
    if (this.valueStore[hash]) {
      let currentNode = this.valueStore[hash]
      if (currentNode.key === key) {
        return currentNode.value
      } else {
        while (currentNode.next) {
          if (currentNode.key === key) {
            return currentNode.value
          } else {
            currentNode = currentNode.next
          }
        }
        if (currentNode.key === key) {
          return currentNode.value
        } else {
          return "no value here"
        }
      }
    }
  }

  contains(key){
    let hash = this.hashFunction(key)
    let currentNode = this.valueStore[hash]
    if (this.valueStore[hash]) {
      while(currentNode.next) {
        if (currentNode.key === key) {
          return true
        } else {
          currentNode = currentNode.next
        }
      }
      if (currentNode.key === key) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  iterate(callback) {
    let currentNode = this.valueStore
    for (let i = 0; i < currentNode.length; i++) {
      if (currentNode[i]) {
        callback(currentNode[i].key, currentNode[i].value)
        while (currentNode[i].next) {
        callback(currentNode[i].next.key, currentNode[i].next.data)
        currentNode[i] = currentNode[i].next
      }
      i++
    }
  }
}

  remove(key) {
    let hash = this.hashFunction(key)
    if (this.valueStore[hash]){
      let currentNode = this.valueStore[hash]
      if (currentNode.key === key){
        this.valueStore[hash] = currentNode.next
      } else {
        while (currentNode.next) {
          if (currentNode.next.key === key) {
            currentNode.next = currentNode.next.next
          } else {
            currentNode = currentNode.next
          }
        }
      }
    }
  }

  chain(hash, newNode) {
    newNode.next = this.valueStore[hash]
    this.valueStore[hash] = newNode
  }

  save(hash, key, value){
    elements[hash] = [pairing(key, value)]
    count++
  }
}
