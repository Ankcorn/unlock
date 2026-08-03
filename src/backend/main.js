const { ipcMain } = require('electron');
const buildTrayApplication = require('./electron');
const store = require('./store')

buildTrayApplication((electron) => {
  ipcMain.on('change', async (event, arg) => {
    console.log(JSON.stringify({ event: 'ipc_action', type: arg.type }))
    try {
      event.reply('update', await store.updateStore(arg, electron))
    } catch (e) {
      console.error(JSON.stringify({
        event: 'ipc_handler_error',
        type: arg.type,
        error: { message: e.message, stack: e.stack }
      }))
      event.reply('update', { page: 'home', error: e.message })
    }
  })
});
