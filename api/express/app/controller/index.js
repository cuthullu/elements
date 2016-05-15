var express = require('express')
  , router = express.Router()

router.use('/hellos', require('./hellos'))


module.exports = router
