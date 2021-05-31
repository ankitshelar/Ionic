const express = require('express')

const { getUsers, postUser } = require('../controllers/user-controller')

const router = express.Router()

router.get('/getUsers', getUsers)
router.post('/postUser', postUser)

module.exports = router