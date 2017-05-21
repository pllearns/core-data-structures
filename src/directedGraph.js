export default class DirectedGraph {
  constructor() {
    this.nodes = {},
    this.count = 0
  }

  addVertex(value) {
    if (value === undefined) return
    this.nodes[value] = this.nodes[value] || []
    this.count++
  }

  hasVertex(value) {
    return this.nodes.hasOwnProperty(value)
  }

  addDirection(vertex1, vertex2) {
    if (!this.nodes[vertex1] || !this.nodes[vertex2]) return undefined
    this.nodes[vertex1].push(vertex2)
  }

  hasDirection(vertex1, vertex2) {
    if (!this.nodes[vertex1] || !this.nodes[vertex2]) return undefined
    const checkArray = Array.from(this.nodes[vertex1])
    return checkArray.includes(vertex2)
  }

  visit(vertex, callback) {
    const visitedArray = []

    const recursiveVisit = (vertexKey) => {

      callback(vertexKey)
      visitedArray.push(vertexKey)

      for (let i = 0; i < this.nodes[vertexKey].length; i++) {
        if(!visitedArray.includes(this.nodes[vertexKey][i])) {
          recursiveVisit(this.nodes[vertexKey][i])
        }
      }
    }
    recursiveVisit(vertex)
    return visitedArray
  }

  findPaths(vertex1, vertex2) {
    if (!this.nodes[vertex1] || !this.nodes[vertex2]) return undefined
    return this.nodes[vertex1]
  }

  count() {
    const dgCountArray = Object.keys(this.nodes)
    return dgCountArray.length
  }

  getSeparatedVertices() {
    const visitedArray = []
    const keyArray = Object.keys(this.nodes)

    const recursiveVisit = (vertexKey) => {
      visitedArray.push(vertexKey)
      for (let i = 0; i < this.nodes[vertexKey].length; i++) {
        if(!visitedArray.includes(this.nodes[vertexKey][i])) {
          recursiveVisit(this.nodes[vertexKey][i])
        }
      }
    }
    recursiveVisit(keyArray[0])

    const intersection = new Set([...keyArray].filter(x => !visitedArray.includes(x)))

    if(!visitedArray || !keyArray) {
      return undefined
    }
    return Array.from(intersection)
  }

  removeVertex(vertex) {
    delete this.nodes.vertex
    this.count--
  }

  removeDirection(vertex1, vertex2) {
    const index = this.nodes[vertex1].indexOf(vertex2)
    if (index > -1) {
      this.nodes[vertex1].splice(index, 1)
    }
    this.nodes[vertex1].length
  }
}
