const { scan } = require('../services/httpService')

const getUsersList = async () => {
    try {
        var params = {
            TableName: "Users"
        };
        var data = await scan(params)
        return data;
    } catch (e) {
        throw new Error(e.message)
    }
}

module.exports = {
    getUsersList
}