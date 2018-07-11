const { expect } = require('chai')
const { renderEmployees } = require('../src/employees')

describe('employees', () => {
  it('renderEmployees', () => {
    expect(renderEmployees()).to.equal(`Current Employees:
James
Bobby
John - Hey.. Its you!
Dont forget. Luke is the BOSS`)
  })
})
