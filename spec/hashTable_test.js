import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/HashTable'

chai.use(chaiChange)

describe('HashTable', () => {
  'use strict'

  it('exists', () => {
    expect(HashTable).to.be.a('function')
  })

  describe('put()', () => {
    it('adds a key-value pair to the hash table.', () => {
      const hash = new HashTable()
      console.log(HashTable);
      hash.put('name', 'philliplorenzo')
      hash.put('19.0', 'renzo')
      expect(hash.contains('19.0')).to.be.true
    })
  })
  //
  // describe('get()', () => {
  //   it('returns the data associated with key.', () => {
  //     const hash = new HashTable()
  //     hash.put('name', 'frankenstein')
  //     expect(hash.size()).to.equal(1)
  //     hash.put('19.0', 'stein')
  //     expect(hash.size()).to.equal(2)
  //     hash.put('wsqe', 'frank')
  //     hash.put('tomp', 'more data')
  //     hash.put('separate', 'hashes')
  //     hash.put('difdeaaat', 'another one')
  //     console.log(hash.valueStore)
  //     expect(hash.get('separate')).to.eql('hashes')
  //     expect(hash.get('wsqe')).to.eql('frank')
  //     expect(hash.get('difdeaaat')).to.eql('another one')
  //   })
  // })

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
