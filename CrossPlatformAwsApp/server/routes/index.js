const express = require('express')

const { curdGet } = require('../controllers/crud-controller')

const router = express.Router()

router.get('/crudGet', curdGet)

module.exports = router