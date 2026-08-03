const CognitoIdentityServiceProvider = require('aws-sdk/clients/cognitoidentityserviceprovider');


async function getUserTokens(ClientId, UserPoolId, REFRESH_TOKEN, tokenName) {
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
		console.error(JSON.stringify({
			event: 'cognito_token_refresh_failed',
			tokenName,
			userPoolId: UserPoolId,
			clientId: ClientId,
			error: { code: e.code, message: e.message, statusCode: e.statusCode, stack: e.stack }
		}))
		return {
			error: e.message
		}
	}

}

module.exports = getUserTokens
