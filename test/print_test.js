const {expect} = require('chai')
const print = require('../src/print')

const wrapStdout = (callback) => {
  const write = process.stdout.write
  const stdout = []
  process.stdout.write = (str) => stdout.push(str)
  try {
    callback(stdout)
  } finally {
    process.stdout.write = write
  }
}

describe('print', () => {
  it('prints with newline to stdout', () => {
    wrapStdout((stdout) => {
      print('Spam')
      expect(stdout).to.deep.equal(['Spam\n'])
    })
  })
})
