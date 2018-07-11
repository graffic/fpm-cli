#!/usr/bin/env node

const log = require('./logging')
const print = require('./print')
const {renderEmployees} = require('./employees')
const {getPosts, getComments} = require('./api')
const {filterPosts, renderComments} = require('./posts')

const main = async () => {
  log.info('===== STARTING APPLICATION =====')

  print(renderEmployees())

  const posts = await getPosts().then(filterPosts('nulla', 50))
  if (posts.length > 0) {
    const comments = await getComments(posts[0].id)
    print(renderComments(comments))
  } else {
    log.debug('There are no posts')
  }

  log.debug('All ajax calls are finished')
  log.info('===== ENDING APPLICATION =====')
}

module.exports = main

/* istanbul ignore if */
if (require.main === module) {
  main().catch((e) => console.error(e))
}
