const { scan, putItem, deleteItem, updateItem } = require('../services/httpService')
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

const deleteUserDetails = async (body) => {
    try {
        var params = {
            TableName: 'Users',
            Key: {
                "Id": body.Id,
            },
        };
        var data = await deleteItem(params)
        return data;
    } catch (e) {
        throw new Error(e.message)
    }
}

const updateUserDetails = async (body) => {
    try {
        var params = {
            TableName: 'Users',
            Key: {
                "Id": body.id,
            },
            UpdateExpression: "set FirstName = :a, LastName=:b",
            ExpressionAttributeValues: {
                ":a": body.fName,
                ":b": body.lName,
            },
        };
        var data = await updateItem(params)
        return data;
    } catch (e) {
        throw new Error(e.message)
    }
}
module.exports = {
    getUsersList,
    postUserDetails,
    deleteUserDetails,
    updateUserDetails
}