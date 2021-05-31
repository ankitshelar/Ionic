const { scan, putItem } = require('../services/httpService')
const uuid = require('uuid');

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

const postUserDetails = async (body) => {
    try {
        var params = {
            TableName: 'Users',
            Item: {
                'FirstName': body.fName,
                'LastName': body.lName,
                'Id': uuid.v1()
            }
        };
        var data = await putItem(params)
        return data;
    } catch (e) {
        throw new Error(e.message)
    }
}

module.exports = {
    getUsersList,
    postUserDetails
}