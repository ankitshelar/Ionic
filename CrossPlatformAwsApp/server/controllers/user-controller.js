const { getUsersList } = require('../services/usersService')

/*
 * call other imported services, or same service but different functions here if you need to
*/
const getUsers = async (req, res, next) => {
  try {
    var data = await getUsersList()
    res.send(JSON.stringify(data))
    next()
  } catch(e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}

module.exports = {
  getUsers
}