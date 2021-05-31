/*
  * if you need to make calls to additional tables, data stores (Redis, for example), 
  * or call an external endpoint as part of creating the blogpost, add them to this service
*/
var AWS = require("aws-sdk");
AWS.config.region = 'ap-south-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-south-1:b91460cd-bd56-47c5-ad97-4f51ff8f5264',
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

module.exports = {
  scan
}