const Store = require('electron-store');
const getUserTokens = require('./aws')
const notifier = require('node-notifier');
const clipboardy = require('clipboardy');

const parseJwt = (token) => {
	try {
		  // console.log(atop(token))
		const data = token.split('.')[1]
		const str = Buffer.from(data, 'base64').toString()
		return JSON.parse(str)
	} catch (e) {
		console.log(e)
		return null;
	}
};

async function updateStore(action, window){
	switch(action.type) {
		case 'INIT':
			return {
				page: 'home',
				homeData: ['Google @ NearST', 'Shop-Owners', 'Testing']
			}
		case 'JWT_CLICK':
			const user = await getUserTokens()
			return {
				page: 'jwt',
				activeToken: user,
				activeUser: parseJwt(user.AuthenticationResult.IdToken)
			}
		case 'HOME_CLICK':
			return {
				page: 'home',
				homeData: ['Google @ NearST', 'Shop-Owners', 'Testing']
			}
		case 'COPY_TOKEN':
			window.hide()
			clipboardy.writeSync(action.payload);
			// return {
			// 	page: 'home',
			// 	homeData: ['Google @ NearST', 'Shop-Owners', 'Testing']
			// }
		case 'CREATE_CLICK':
			return {
				page: 'create',
			}
	}
}

module.exports = {
	updateStore: updateStore,
	// listen: store.onDidChange,
	// get: () => store.get()
}
