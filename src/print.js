/**
 * Console (stdout) output
 * @module print
 */

/**
 * Print on stdout with a new line
 * @param {string} msg Message to put on stdout
 */
const print = (msg) => process.stdout.write(`${msg}\n`)

module.exports = print
