const BOSS = 'Luke'
const YOUR_NAME = 'John'
const CURRENT_EMPLOYEES = [ 'James', 'Bobby', 'John' ]

const renderNames = (employees, me) => employees
  .map(name => me === name ? `${name} - Hey.. Its you!` : name)
  .join('\n')

const renderBoss = (boss) => `Dont forget. ${boss} is the BOSS`

/**
 * Builds the list of employess and boss as a string.
 * @return {string}
 */
const renderEmployees = () => {
  return `Current Employees:\n${renderNames(CURRENT_EMPLOYEES, YOUR_NAME)}\n${renderBoss(BOSS)}`
}

module.exports = { renderEmployees }
