/**
 * Creates a closure that filters a list of posts by keyword and title length
 * Usefult to give it to a promise in a .then clause: .then(filterPosts('a', 20))
 * @param {string} keyword
 * @param {number} maxTitleLen
 * @returns {Function}
 */
const filterPosts = (keyword, maxTitleLen) => (posts) =>
  posts.filter(({title, body}) => title.length < maxTitleLen && body.includes(keyword))

/**
 * Format one comment to string
 * @param {object} c Comment object
 * @returns {string}
 */
const formatComment = (c) => `User ${c.email} wrote:\n${c.body}`

/**
 * Renders all comments with a header
 * @param {Array<Object>} comments Array of comments
 * @returns {string}
 */
const renderComments = (comments) => `----------\nComments:\n${comments.map(formatComment).join('\n\n')}`

module.exports = {filterPosts, renderComments}
