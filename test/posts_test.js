const { expect } = require('chai')
const { filterPosts, renderComments } = require('../src/posts')

describe('posts', () => {
  describe('filterPosts', () => {
    const posts = [
      {title: 'one', body: 'spam'},
      {title: '1234567890', body: 'eggs'}
    ]

    it('by content keyword', () => {
      expect(filterPosts('eggs', 100)(posts)).to.deep.equal([posts[1]])
    })

    it('by title length', () => {
      expect(filterPosts('s', 10)(posts)).to.deep.equal([posts[0]])
    })
  })

  it('renderComments', () => {
    const comments = [
      {
        email: 'a@b.c',
        body: 'Egg and bacon'
      }, {
        email: 'd@e.f',
        body: 'Egg, sausage and bacon'
      }
    ]
    expect(renderComments(comments)).to.equal(`----------
Comments:
User a@b.c wrote:
Egg and bacon

User d@e.f wrote:
Egg, sausage and bacon`)
  })
})
