const proxyquire = require('proxyquire')
const MockAdapter = require('axios-mock-adapter')
const axios = require('axios')
const { expect } = require('chai')

const POSTS = [{title: 'title', body: 'nulla', id: 42}]
const COMMENTS = []

describe('integration test', () => {
  it('does the job', () => {
    // Mock output
    let output = ''
    const index = proxyquire('../src', {'./print': (msg) => { output += msg + '\n' }})

    // Mock input
    const axiosMock = new MockAdapter(axios)
    axiosMock
      .onGet('https://jsonplaceholder.typicode.com/posts').reply(200, POSTS)
      .onGet('https://jsonplaceholder.typicode.com/posts/42/comments').reply(200, COMMENTS)
    const expected = `Current Employees:
James
Bobby
John - Hey.. Its you!
Dont forget. Luke is the BOSS
----------
Comments:

`
    return index().then(() => expect(output).to.equal(expected))
  })
})
