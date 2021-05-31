/*
  * if you need to make calls to additional tables, data stores (Redis, for example), 
  * or call an external endpoint as part of creating the blogpost, add them to this service
*/
var AWS = require("aws-sdk");
const { config } = require('../config/config')

AWS.config.region = config.region; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: config.identityPoolId,
});
var docClient = new AWS.DynamoDB.DocumentClient();

const scan = async (params) => {
  try {
    var data = await docClient.scan(params).promise()
    return data;
  } catch (e) {
    throw new Error(e.message)
  }
}

const putItem = async (params) => {
  try {
    var data = await docClient.put(params).promise()
    return data;
  } catch (e) {
    throw new Error(e.message)
  }
}

const updateItem = async (params) => {
  try {
    var data = await docClient.update(params).promise()
    return data;
  } catch (e) {
    throw new Error(e.message)
  }
}

const deleteItem = async (params) => {
  try {
    var data = await docClient.delete(params).promise()
    return data;
  } catch (e) {
    throw new Error(e.message)
  }
}

module.exports = {
  scan,
  putItem,
  deleteItem,
  updateItem
}