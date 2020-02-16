/* global describe assert beforeEach afterEach it api expect */

const sinon = require('sinon')
const logger = require('../../backend/lib/logger')

describe('Testing logger middleware', () => {
  beforeEach(done => {
    process.env.NODE_ENV = 'nottest'
    done()
  })

  it('should call next() once', function() {
    const nextSpy = sinon.spy()
    logger({ method: 'test', url: 'test' }, {}, nextSpy)
    expect(nextSpy.calledOnce).to.be.true
  })

  it('should console log correct message', function() {
    const nextSpy = sinon.spy()
    const spy = sinon.spy(console, 'log')
    logger({ method: 'GET', url: '/' }, {}, nextSpy)
    assert(spy.calledWith('Incoming GET to /'))
    spy.restore()
  })

  afterEach(done => {
    process.env.NODE_ENV = 'test'
    done()
  })
})
