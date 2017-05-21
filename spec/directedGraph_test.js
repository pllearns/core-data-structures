import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import DirectedGraph from '../src/DirectedGraph'

chai.use(chaiChange)

describe('DirectedGraph', () => {
  'use strict'

  it('exists', () => {
    expect(DirectedGraph).to.be.a('function')
  })

  describe('addVertex(value)', () => {
    it('adds a vertices to the graph', () => {
      const diGraph = new DirectedGraph()
      diGraph.addVertex('v1')

      expect(diGraph.count).to.equal(1)
      expect(diGraph.addVertex(undefined)).to.equal(undefined)
    })
  })

  describe('hasVertex(value)', () => {
    it('checks to see if there is a value in the vertex', () => {
      const diGraph = new DirectedGraph()
      diGraph.addVertex('v1')

      expect(diGraph.hasVertex('v1')).to.equal(true)
      expect(diGraph.hasVertex('v2')).to.equal(false)
    })
  })

  describe('addDirection(vertex1, vertex2)', () => {
    it('adds direction to an edge', () => {
      const diGraph = new DirectedGraph()
      diGraph.addVertex('v1')
      diGraph.addVertex('v2')
      diGraph.addDirection('v1', 'v2')

      expect(diGraph.hasDirection('v1', 'v2')).to.eql(true)
    })
  })

  describe('hasDirection(v1, v2)', () => {
    it('checks to see if there is a direction between vertices', () => {
      const diGraph = new DirectedGraph()
      diGraph.addVertex('v1')
      diGraph.addVertex('v2')
      diGraph.addDirection('v1', 'v2')

      expect(diGraph.hasDirection('v1','v2')).to.equal(true)
      expect(diGraph.hasDirection('v1', 'v3')).to.equal(undefined)
    })
  })

  describe('removeDirection(vertex1, vertex2)', () => {
    it('removes direction from between two vertices', () => {
      const diGraph = new DirectedGraph()
      diGraph.addVertex('v1')
      diGraph.addVertex('v2')
      diGraph.addDirection('v1', 'v2')

      expect(diGraph.removeDirection('v1', 'v2')).to.equal(undefined)
    })
  })

  describe('visit(v1, vertex => console.log(vertex))', () => {
    it('visits all the connected vertices in the graph', () => {
      const diGraph = new DirectedGraph()
      diGraph.addVertex('v1')
      diGraph.addVertex('v2')
      diGraph.addVertex('v3')
      diGraph.addVertex('v4')
      diGraph.addVertex('v5')
      diGraph.addVertex('v6')
      diGraph.addDirection('v1', 'v2')
      diGraph.addDirection('v1', 'v3')
      diGraph.addDirection('v2', 'v4')
      diGraph.addDirection('v3', 'v4')
      diGraph.addDirection('v4', 'v5')
      diGraph.addDirection('v5', 'v6')

      expect(diGraph.visit('v1', 'vertex')).to.equal('v1', 'v2')
    })
  })

  describe('findPaths(v1, v2)', () => {
    it('returns the path between two vertices', () => {
      const diGraph = new DirectedGraph()
      diGraph.addVertex('v1')
      diGraph.addVertex('v2')
      diGraph.addDirection('v1', 'v2')

      expect(diGraph.findPaths('v1', 'v2')).to.eql(['v2'])
    })
  })

  describe('getSeparatedVertices()', () => {
    it('returns an array of all of the vertices', () => {
      const diGraph = new DirectedGraph()
      diGraph.addVertex('v1')
      diGraph.addVertex('v2')
      diGraph.addVertex('v3')
      diGraph.addVertex('v4')
      diGraph.addVertex('v5')
      diGraph.addVertex('v7')
      diGraph.addDirection('v1', 'v2')
      diGraph.addDirection('v1', 'v3')
      diGraph.addDirection('v2', 'v4')
      diGraph.addDirection('v3', 'v4')
      diGraph.addDirection('v4', 'v5')

      expect(diGraph.getSeparatedVertices()).to.eql(['v7'])
    })
  })

  describe("removeVertex('v1')", () => {
    it('removes an existing vertex and all its directions', () => {
      const diGraph = new DirectedGraph()
      diGraph.addVertex('v1')
      diGraph.addVertex('v2')

      diGraph.removeVertex('v1')

      expect(diGraph.count()).to.equal(1)
    })
  })

  describe('count()', () => {
    it('returns the number of vertices in the graph', () => {
      const diGraph = new DirectedGraph()
      diGraph.addVertex('v1')
      diGraph.addVertex('v2')
      diGraph.addVertex('v3')

      expect(diGraph.count()).to.equal(3)
    })
  })
})
