const MockAdapter = require('axios-mock-adapter')
const axios = require('axios')
const { expect } = require('chai')
const { getPosts, getComments } = require('../src/api')

describe('api', () => {
  let axiosMock

  before(() => {
    axiosMock = new MockAdapter(axios)
  })

  beforeEach(() => axiosMock.reset())

  it('getPosts from url', () => {
    axiosMock.onGet('https://jsonplaceholder.typicode.com/posts').reply(200, 'spam')

    return getPosts().then(data => {
      expect(data).to.equal('spam')
    })
  })

  it('getComments for a specific post', () => {
    axiosMock.onGet('https://jsonplaceholder.typicode.com/posts/42/comments').reply(200, 'eggs')

    return getComments(42).then(data => {
      expect(data).to.equal('eggs')
    })
  })

  after(() => axiosMock.restore())
})
