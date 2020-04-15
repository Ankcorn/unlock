const CognitoIdentityServiceProvider = require('aws-sdk/clients/cognitoidentityserviceprovider');


function getUserTokens() {
	const cognito = new CognitoIdentityServiceProvider({ region: 'eu-west-1' });
	return cognito.adminInitiateAuth({
		AuthFlow: 'REFRESH_TOKEN_AUTH',
		ClientId: '',
		UserPoolId: '',
		AuthParameters: {
			REFRESH_TOKEN : ''
		}
	}).promise();
}

module.exports = getUserTokens
