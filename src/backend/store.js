const Store = require('electron-store');
const getUserTokens = require('./aws')
const clipboardy = require('clipboardy');
const store = new Store();

// Uncomment line below to reset store if state gets bad
// store.delete('tokens')

async function updateStore(action, electron) {

	const tokens = store.get('tokens') || [];

	switch (action.type) {
		case 'INIT':
			return {
				page: 'home',
				homeData: tokens
			}
		case 'JWT_CLICK':
			const token = store.get('tokens').find((item) => item.name === action.payload)

			const result = await getUserTokens(token['app-client-id'], token['user-pool-id'], token['refresh-token'])
			return {
				page: 'jwt',
				activeToken: result,
				name: action.payload
			}
		case 'HOME_CLICK':
			return {
				page: 'home',
				homeData: tokens
			}
		case 'COPY_TOKEN':
			electron.window.hide()
			clipboardy.writeSync(action.payload);
			return
		case 'CREATE_CLICK':
			return {
				page: 'create',
			}
		case 'CREATE_TOKEN':
			store.set(`tokens`, [...tokens, action.payload])
			return {
				page: 'home',
				homeData: [...tokens, action.payload]
			}
		case 'DELETE_TOKEN':
			const updatedTokens = tokens.filter(el => el.name !== action.payload)
			store.set(`tokens`, updatedTokens)
			return {
				page: 'home',
				homeData: updatedTokens
			}
		case 'EXIT':
			return electron.app.quit()
	}
}

module.exports = {
	updateStore: updateStore,
	// listen: store.onDidChange,
	// get: () => store.get()
}
