const CognitoIdentityServiceProvider = require('aws-sdk/clients/cognitoidentityserviceprovider');


async function getUserTokens(ClientId, UserPoolId, REFRESH_TOKEN) {
	const cognito = new CognitoIdentityServiceProvider({ region: 'eu-west-1' });
	try {
		return await cognito.adminInitiateAuth({
			AuthFlow: 'REFRESH_TOKEN_AUTH',
			ClientId,
			UserPoolId,
			AuthParameters: {
				REFRESH_TOKEN
			}
		}).promise();
	} catch (e) {
		return {
			error: e.message
		}
	}

}

module.exports = getUserTokens
