const { ipcMain } = require('electron');
const buildTrayApplication = require('./electron');
const store = require('./store')

buildTrayApplication(({ window, app, tray } ) => {
  ipcMain.on('change', async (event, arg) => {
    console.log(arg)
    event.reply('update', await store.updateStore(arg, window))
  })
});
