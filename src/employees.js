/**
 * Employee names and tools
 * @module employees
 */
const BOSS = 'Luke'
const YOUR_NAME = 'John'
const CURRENT_EMPLOYEES = [ 'James', 'Bobby', 'John' ]

/**
 * Builds a string with the names of all employees given
 * @param {Arrray<Object>} employees List of employees
 * @param {string} me My name
 */
const renderNames = (employees, me) => employees
  .map(name => me === name ? `${name} - Hey.. Its you!` : name)
  .join('\n')

/**
 * Renders the boss message
 * @param {string} boss Boss name
 */
const renderBoss = (boss) => `Dont forget. ${boss} is the BOSS`

/**
 * Builds the list of employess and boss as a string.
 * @return {string}
 */
const renderEmployees = () => {
  return `Current Employees:\n${renderNames(CURRENT_EMPLOYEES, YOUR_NAME)}\n${renderBoss(BOSS)}`
}

module.exports = { renderEmployees }
