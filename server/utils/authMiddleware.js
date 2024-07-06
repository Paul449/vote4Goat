const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  const token = req.headers['authorization']
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = decoded.user
    } catch (err) {
      console.error('Invalid token')
    }
  }
  next()
}
