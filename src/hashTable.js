class Node {
  constructor(key,value) {
    this.key = key
    this.value = value
    this.next = null;
  }

  setNext(node) {
    this.next = node
    return this
  }
}


class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this._length = 0;
  }

  insert(key, value) {
    let node = new Node(key, value)
    if(this.head === null) {
      this.head = node
    }
    if(this.tail !== null) {
      this.tail.next = node
    }
    this.tail = node
    this._length++
  }

  find(key) {
    let currentNode = this.head
    let position = 0
    while (currentNode !== null && currentNode.key !== key) {
      currentNode = currentNode.next
      position++
    }
    if (currentNode !== null && currentNode.key === key) {
      return position
    }
    return -1
  }

  getValueAt(key) {
    let position = this.find(key)
    console.log('position?', position)
    let currentNode = this.head
    console.log('what position?', position)
    for (let i = 0; i <= position; i++ ) {
      console.log('what position now?', position)
      currentNode = currentNode.next
    }
    console.log('what player?', currentNode.value)
    return currentNode.value
  }
}

class Bucket {
  constructor() {
    this._storage = new LinkedList()
  }
    add(key, value) {
      this._storage.insert(key, value)
      this._storage._length++
      return this._storage
    }

    find(key) {
      return this._storage.find(key)
    }

    getValueAt(position) {
      return this._storage.getValueAt(position)
    }

   replace(value, position) {
      this._storage[position][1] = value
    }
}

class HashTable {
  constructor(tableSize) {
    this._size = tableSize;
    this._storage = [];
    for(let i =0; i< tableSize; i++) {
      this._storage[i] = new Bucket()
    }
    this._count = 0;
  }

  simpleHash(str) {
    var hash = 0;
    for (var i=0; i<str.length; i++) {
      hash += str.charCodeAt(i) * (i+1);
    }
    return hash % this._size
  }

  getBucket(key) {
    let bucketNumber = this.simpleHash(key, this._size)
    return this._storage[bucketNumber]
  }

  find(key) {
    let bucket = this.getBucket(key)
    return bucket.find(key)
  }

  setHash(key, value) {
    let keyPosition = this.find(key, value)
    let bucket = this.getBucket(key)
      if(keyPosition === -1) {
        bucket.add(key, value)
        this._count++
        console.log('do I get a count?', this._count)
      } else {
        bucket.replace(value, keyPosition)
    }
      return this
  }

    getHash(key) {
      let bucket = this.getBucket(key)
      let position = bucket.find(key)
      if(position !== -1) {
        bucket.getValueAt(position)
      }
      return undefined
  }

  remove() {
    if (this.hasItem(key)) {
    previous = this.items[key];
    this.size--;
    delete this.items[key];
    return previous;
    }
    else {
        return undefined;
    }
  }

}

let myHash = new HashTable(3)
myHash.setHash("Warriors", "Curry")
myHash.setHash("Spurs", "Leonard")
myHash.setHash("Celtics", "Thomas")
console.log(myHash._storage[2])
console.log('are there warriors here?', myHash.getHash("Warriors"))
console.log('are there spurs here?', myHash.getHash("Spurs"))
console.log('are there Celtics here?', myHash.getHash("Celtics"))
// myHash.remove("Celtics")
// myHash.remove("Spurs")

// console.log(myHash._storage[1])
