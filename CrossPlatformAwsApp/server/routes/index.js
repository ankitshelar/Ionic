const express = require('express')

const { getUsers, postUser,deleteUser,updateUser } = require('../controllers/user-controller')

const router = express.Router()

router.get('/getUsers', getUsers)
router.post('/postUser', postUser)
router.post('/deleteUser', deleteUser)
router.post('/updateUser', updateUser)

module.exports = router