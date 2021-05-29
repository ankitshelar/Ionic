const { httpGet } = require('../services/httpService')

/*
 * call other imported services, or same service but different functions here if you need to
*/
const curdGet = async (req, res, next) => {
  try {
    var data = await httpGet('data fetched')
    res.send(data)
    next()
  } catch(e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}

module.exports = {
    curdGet
}