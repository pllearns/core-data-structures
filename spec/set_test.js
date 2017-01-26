import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Set from '../src/set'

chai.use(chaiChange)

describe('Set', () => {
    it('exists', () => {
     expect(Set).to.be.a('function')
  })

  describe('add()', () => {
    it('adds an element to the set', () => {
      const mySet = new Set()
      mySet.add('foo')

      expect(mySet.elements)
        .to.eql(['foo'])

      mySet.add('bar')

      expect(mySet.elements)
        .to.eql(['foo', 'bar'])

      expect(mySet.elements[mySet.elements.length -1])
        .to.eql('bar')
    })
  })

  describe('isEmpty()', () => {
    it('returns true if the set is empty or false if not', () => {
      const mySet = new Set()

      expect(mySet.isEmpty())
        .to.eql(true)

      const otherSet = new Set('A')

      expect(otherSet.isEmpty())
        .to.eql(false)
    })
  })

  describe('contains()', () => {
    it('returns true if the set contains an element and false if not', () => {
      const mySet = new Set('A')

      expect(mySet.contains('B'))
        .to.eql(false)

      expect(mySet.contains('A'))
        .to.eql(true)
    })
  })

  describe('remove()', () => {
    it('removes an element if it exists from the set', () => {
      const mySet = new Set('foo')
      console.log()
      expect(mySet.remove('foo'))
        .to.eql([])
    })
  })

  describe('forEach()', () => {
    it('takes a callback function and passes it each element in sequence', () => {
      const mySet = new Set([1, 2, 3])

      expect(() => mySet.forEach(num => num + 1))
        .to.eql([2, 3, 4])
    })
  })

  describe('size()', () => {
    it('returns the number of elements in the set', () => {
      const mySet = new Set([1, 2, 3, 4])

      expect(() => mySet.size())
        .to.eql(4)
    })
  })

  describe('union()', () => {
    it('unions the set with another set and returns the resulting set', () => {
      const mySet = new Set('foo')
      const otherSet = new Set(['foo', 'bar'])

      expect(() => mySet.union(otherSet))
        .to.eql(['foo', 'bar'])

    })
  })

  describe('intersect()', () => {
    it('intersects the set with another set and returns the resulting set', () => {
      const mySet = new Set('foo')
      const otherSet = new Set(['foo', 'bar'])

      expect(() => mySet.intersect(otherSet))
        .to.eql('foo')
    })
  })

  describe('difference()', () => {
    it('returns a set that contains the elements found in the set but not in otherSet', () => {
      const mySet = new Set('foo')
      const otherSet = new Set(['foo', 'bar'])

      expect(() => mySet.difference(otherSet))
        .to.eql('bar')
    })
  })

  describe('isSubset()', () => {
    it('returns true if the set is a subset of otherSet or false if not', () => {
      const mySet = new Set('foo')
      const otherSet = new Set(['foo', 'bar'])

      expect(() => mySet.isSubset(otherSet))
        .to.be(false)

      expect(() => otherSet.isSubset(mySet))
        .to.be(true)
    })
  })

  describe('clone()', () => {
    it('returns a cloned set', () => {
      const mySet = new Set('foo')

      expect(() => mySet.clone())
        .to.eql(['foo'])
    })
  })
})
