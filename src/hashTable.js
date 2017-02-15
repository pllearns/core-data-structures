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

  size() {
    return this._length
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

  get(key) {
    let hash = this.hashFunction(key)
      if(this.dataStore[hash]) {
        let currentNode = this.dataStore[hash]
    if (currentNode.key === key) {
      return currentNode.data
    } else {
      while(currentNode.next) {
        if(currentNode.key === key) {
          return currentNode.data
        } else {
          currentNode = currentNode.next
        }
      }
      if (currentNode.key === key) {
        return currentNode.data
      } else {
        return "sorry your data is not here"
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

  update(hash, key, value) {
    let i, pair
    for(i in elements[hash]) {
      pair = elements[hash][i]
      if (pair.getKey() === key) {
        pair.setValue(value)
        return true
      }
    }
    return false
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
}

//   class Node{
//   constructor() {
//     this.key = 0,
//     this.data = 0,
//     this.next = null
//   }
// }

// export default class Hashtable{
//   constructor(){
//     this._length,
//     this.dataStore = []
//   }
//
//   hashFunction(key) {
//     let sum = 0
//     for (let i = 0; i < key.length; i++) {
//       sum += key.charCodeAt(i)
//     }
//     return sum % 31
//   }

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
