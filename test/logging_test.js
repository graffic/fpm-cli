const { expect } = require('chai')
const proxyquire = require('proxyquire')

describe('logging', () => {
  it('is silent when no debug flag is given', () => {
    const log = proxyquire('../src/logging', {})
    expect(log.silent).to.equal(true)
  })

  it('is not silent if DEBUG is given', () => {
    process.env.DEBUG = 1
    try {
      const log = proxyquire('../src/logging', {})
      expect(log.silent).to.equal(false)
    } finally {
      delete process.env.DEBUG
    }
  })
})
