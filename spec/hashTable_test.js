import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/oldHashTable'

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
      hash.put('42.0', 'renzo')
      expect(hash.contains('42.0')).to.be.true
    })
  })

  describe('get()', () => {
    it('returns the data associated with key.', () => {
      const hash = new HashTable()
      hash.put('name', 'batman')
      hash.put('19.0', 'bat')
      hash.put('wkrp', 'bruce')
      hash.put('tomp', 'more data')
      hash.put('johnwick', 'hashes')
      hash.put('spartacus', 'liam')
      expect(hash.get('johnwick')).to.eql('hashes')
      expect(hash.get('wkrp')).to.eql('bruce')
      expect(hash.get('spartacus')).to.eql('liam')
    })
  })

  describe('iterate()', () => {
    it('takes a callback function and passes it each key and value in sequence.', () => {
      const hash = new HashTable()
      let sum = 0
      hash.put('name', 2)
      hash.put('42.0', 3)
      hash.put('wkrp', 4)
      hash.put('gowa', 6)
      hash.put('definite', 12)
      hash.put('johnwick', 31)
      hash.iterate(function(key, data){ sum += data })
      expect(sum).to.equal(58)
    })
  })

  describe('remove()', () => {
  it('removes a key-value pair by key.', () => {
    const hash = new HashTable()
    hash.put('name', 'diana')
    hash.put('42.0', 'phil')
    hash.put('keanu', 'reeves')
    hash.put('matrix', 'anderson')
    expect(hash.contains('matrix')).to.be.true
    expect(hash.contains('name')).to.be.true
    hash.remove('matrix')
    hash.remove('name')
    expect(hash.contains('matrix')).to.be.false
    expect(hash.contains('name')).to.be.false
  })
})

  describe('size()', () => {
    it('returns the number of key-value pairs in the hash table.', () => {
      const hash = new HashTable()
      hash.put('name', 'john')
      hash.put('42.0', 'wick')
      hash.put('keanu', 'reeves')
      hash.put('matrix', 'anderson')
      expect(hash.size()).to.eql(4)
    })
  })

  describe('hashFunction()', () => {
    it('generates a hash for the key "name".', () => {
      const hash = new HashTable()
      hash.put('name', 'john')
      hash.put('42.0', 'wick')
      hash.put('keanu', 'reeves')
      hash.put('matrix', 'anderson')
      expect(hash.hashFunction()).to.eql('oiushdfoi')
    })
  })
})
