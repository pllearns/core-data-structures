import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/HashTable'

chai.use(chaiChange)

describe.only('HashTable', () => {
  'use strict'

  it('exists', () => {
    expect(HashTable).to.be.a('function')
  })

  describe('put()', () => {
    it('adds a key-value pair to the hash table..', () => {
      const hash = new HashTable()
      expect(() => hash.put('foo'))
        .to.eql(() => { foo: 0})
      expect(() => hash.put('bar'))
        .to.eql({ bar: 'name'})
    })
  })

  describe('get()', () => {
    it('returns the data associated with key.', () => {
      const hash = new HashTable()
      expect(() => hash.get('foo'))
        .to.eql({ value: 'foo'})
    })
  })

  // describe('contains()', () => {
  //   it('returns true if the hash table contains the key.', () => {
  //     const queue = new Queue()
  //     expect(() => queue.enqueue('foo'))
  //       .to.alter(() => queue.elements.length, { from: 0, to: 1 })
  //     expect(() => queue.enqueue('bar'))
  //       .to.alter(() => queue.elements.length, { from: 1, to: 2 })
  //     expect(queue.elements[queue.elements.length - 1])
  //       .to.equal('bar')
  //   })
  // })
  // describe('iterate()', () => {
  //   it('takes a callback function and passes it each key and value in sequence.', () => {
  //     const queue = new Queue()
  //     expect(() => queue.enqueue('foo'))
  //       .to.alter(() => queue.elements.length, { from: 0, to: 1 })
  //     expect(() => queue.enqueue('bar'))
  //       .to.alter(() => queue.elements.length, { from: 1, to: 2 })
  //     expect(queue.elements[queue.elements.length - 1])
  //       .to.equal('bar')
  //
  //   })
  // })
  // describe('remove()', () => {
  //   it('removes a key-value pair by key.', () => {
  //     const queue = new Queue()
  //     expect(() => queue.enqueue('foo'))
  //       .to.alter(() => queue.elements.length, { from: 0, to: 1 })
  //     expect(() => queue.enqueue('bar'))
  //       .to.alter(() => queue.elements.length, { from: 1, to: 2 })
  //     expect(queue.elements[queue.elements.length - 1])
  //       .to.equal('bar')
  //   })
  // })
  // describe('size()', () => {
  //   it('returns the number of key-value pairs in the hash table.', () => {
  //     const queue = new Queue()
  //     expect(() => queue.enqueue('foo'))
  //       .to.alter(() => queue.elements.length, { from: 0, to: 1 })
  //     expect(() => queue.enqueue('bar'))
  //       .to.alter(() => queue.elements.length, { from: 1, to: 2 })
  //     expect(queue.elements[queue.elements.length - 1])
  //       .to.equal('bar')
  //
  //   })
  // })
  // describe('hash()', () => {
  //   it('generates a hash for the key "name".', () => {
  //     const queue = new Queue()
  //     expect(() => queue.enqueue('foo'))
  //       .to.alter(() => queue.elements.length, { from: 0, to: 1 })
  //     expect(() => queue.enqueue('bar'))
  //       .to.alter(() => queue.elements.length, { from: 1, to: 2 })
  //     expect(queue.elements[queue.elements.length - 1])
  //       .to.equal('bar')
  //   })
  // })
})
