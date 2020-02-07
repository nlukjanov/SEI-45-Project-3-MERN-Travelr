const logger = function (req, res, next) {
  console.log(`Incoming '${req.method}' to '${req.url}'`)
  next()
}

module.exports = logger