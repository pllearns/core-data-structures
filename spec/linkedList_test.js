import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linkedList'

chai.use(chaiChange)

describe('LinkedList', () => {
  'use strict'

  it('exists', () => {
    expect(LinkedList).to.be.a('function')
  })

  describe('getHeadNode()', () => {
    it('adds an element to the back of the queue.', () => {
      const queue = new Queue()
      expect(() => queue.enqueue('foo'))
        .to.alter(() => queue.elements.length, { from: 0, to: 1 })
      expect(() => queue.enqueue('bar'))
        .to.alter(() => queue.elements.length, { from: 1, to: 2 })
      expect(queue.elements[queue.elements.length - 1])
        .to.equal('bar')
    })
  })
  describe('getTailNode()', () => {
    it('adds an element to the back of the queue.', () => {
      const queue = new Queue()
      expect(() => queue.enqueue('foo'))
        .to.alter(() => queue.elements.length, { from: 0, to: 1 })
      expect(() => queue.enqueue('bar'))
        .to.alter(() => queue.elements.length, { from: 1, to: 2 })
      expect(queue.elements[queue.elements.length - 1])
        .to.equal('bar')
    })
  })
  describe('contains()', () => {
    it('adds an element to the back of the queue.', () => {
      const queue = new Queue()
      expect(() => queue.enqueue('foo'))
        .to.alter(() => queue.elements.length, { from: 0, to: 1 })
      expect(() => queue.enqueue('bar'))
        .to.alter(() => queue.elements.length, { from: 1, to: 2 })
      expect(queue.elements[queue.elements.length - 1])
        .to.equal('bar')
    })
  })
  describe('find()', () => {
    it('adds an element to the back of the queue.', () => {
      const queue = new Queue()
      expect(() => queue.enqueue('foo'))
        .to.alter(() => queue.elements.length, { from: 0, to: 1 })
      expect(() => queue.enqueue('bar'))
        .to.alter(() => queue.elements.length, { from: 1, to: 2 })
      expect(queue.elements[queue.elements.length - 1])
        .to.equal('bar')

    })
  })
  describe('insert()', () => {
    it('adds an element to the back of the queue.', () => {
      const queue = new Queue()
      expect(() => queue.enqueue('foo'))
        .to.alter(() => queue.elements.length, { from: 0, to: 1 })
      expect(() => queue.enqueue('bar'))
        .to.alter(() => queue.elements.length, { from: 1, to: 2 })
      expect(queue.elements[queue.elements.length - 1])
        .to.equal('bar')
    })
  })
  describe('insertFirst()', () => {
    it('adds an element to the back of the queue.', () => {
      const queue = new Queue()
      expect(() => queue.enqueue('foo'))
        .to.alter(() => queue.elements.length, { from: 0, to: 1 })
      expect(() => queue.enqueue('bar'))
        .to.alter(() => queue.elements.length, { from: 1, to: 2 })
      expect(queue.elements[queue.elements.length - 1])
        .to.equal('bar')

    })
  })
  describe('insertBefore()', () => {
    it('adds an element to the back of the queue.', () => {
      const queue = new Queue()
      expect(() => queue.enqueue('foo'))
        .to.alter(() => queue.elements.length, { from: 0, to: 1 })
      expect(() => queue.enqueue('bar'))
        .to.alter(() => queue.elements.length, { from: 1, to: 2 })
      expect(queue.elements[queue.elements.length - 1])
        .to.equal('bar')
    })
  })
  describe('insertAfter()', () => {
    it('adds an element to the back of the queue.', () => {
      const queue = new Queue()
      expect(() => queue.enqueue('foo'))
        .to.alter(() => queue.elements.length, { from: 0, to: 1 })
      expect(() => queue.enqueue('bar'))
        .to.alter(() => queue.elements.length, { from: 1, to: 2 })
      expect(queue.elements[queue.elements.length - 1])
        .to.equal('bar')

    })
  })
  describe('remove()', () => {
    it('adds an element to the back of the queue.', () => {
      const queue = new Queue()
      expect(() => queue.enqueue('foo'))
        .to.alter(() => queue.elements.length, { from: 0, to: 1 })
      expect(() => queue.enqueue('bar'))
        .to.alter(() => queue.elements.length, { from: 1, to: 2 })
      expect(queue.elements[queue.elements.length - 1])
        .to.equal('bar')
    })
  })
  describe('removeFirst()', () => {
    it('adds an element to the back of the queue.', () => {
      const queue = new Queue()
      expect(() => queue.enqueue('foo'))
        .to.alter(() => queue.elements.length, { from: 0, to: 1 })
      expect(() => queue.enqueue('bar'))
        .to.alter(() => queue.elements.length, { from: 1, to: 2 })
      expect(queue.elements[queue.elements.length - 1])
        .to.equal('bar')
    })
  })
  describe('isEmpty()', () => {
    it('adds an element to the back of the queue.', () => {
      const queue = new Queue()
      expect(() => queue.enqueue('foo'))
        .to.alter(() => queue.elements.length, { from: 0, to: 1 })
      expect(() => queue.enqueue('bar'))
        .to.alter(() => queue.elements.length, { from: 1, to: 2 })
      expect(queue.elements[queue.elements.length - 1])
        .to.equal('bar')
    })
  })
  describe('size()', () => {
    it('adds an element to the back of the queue.', () => {
      const queue = new Queue()
      expect(() => queue.enqueue('foo'))
        .to.alter(() => queue.elements.length, { from: 0, to: 1 })
      expect(() => queue.enqueue('bar'))
        .to.alter(() => queue.elements.length, { from: 1, to: 2 })
      expect(queue.elements[queue.elements.length - 1])
        .to.equal('bar')
    })
  })
  describe('clear()', () => {
    it('adds an element to the back of the queue.', () => {
      const queue = new Queue()
      expect(() => queue.enqueue('foo'))
        .to.alter(() => queue.elements.length, { from: 0, to: 1 })
      expect(() => queue.enqueue('bar'))
        .to.alter(() => queue.elements.length, { from: 1, to: 2 })
      expect(queue.elements[queue.elements.length - 1])
        .to.equal('bar')
    })
  })

})
