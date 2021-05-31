const { getUsersList, postUserDetails,deleteUserDetails,updateUserDetails } = require('../services/usersService')

/*
 * call other imported services, or same service but different functions here if you need to
*/
const getUsers = async (req, res, next) => {
  try {
    var data = await getUsersList()
    res.send(JSON.stringify(data))
    next()
  } catch (e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}

const postUser = async (req, res, next) => {
  try {
    var data = await postUserDetails(req.body)
    res.send(JSON.stringify(data))
    next()
  } catch (e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}

const deleteUser = async (req, res, next) => {
  try {
    var data = await deleteUserDetails(req.body)
    res.send(JSON.stringify(data))
    next()
  } catch (e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}

const updateUser = async (req, res, next) => {
  try {
    var data = await updateUserDetails(req.body)
    res.send(JSON.stringify(data))
    next()
  } catch (e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}
module.exports = {
  getUsers,
  postUser,
  deleteUser,
  updateUser
}