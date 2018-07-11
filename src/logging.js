const { createLogger, transports, format } = require('winston')

const logger = createLogger({
  level: 'debug',
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.printf(info => `${info.timestamp} ${info.level} ${info.message}`)
  ),
  transports: [new transports.Console()],
  silent: true
})

if (process.env.DEBUG) {
  logger.silent = false
}

module.exports = logger
