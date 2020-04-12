const { app, BrowserWindow, Tray } = require('electron');
const path = require('path');

app.dock.hide();
let window, tray;

const createWindow = () => {
  window = new BrowserWindow({
      width: 320,
      height: 450,
      show: false,
      frame: false,
      fullscreenable: false,
      resizable: false,
      transparent: true,
  });
  window.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  // Hide the window when it loses focus
  window.on('blur', () => {
      if (!window.webContents.isDevToolsOpened()) {
          window.hide();
      }
  });
}

const getWindowPosition = () => {
  const windowBounds = window.getBounds();
  const trayBounds = tray.getBounds();
  
  // Center window horizontally below the tray icon
  const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (windowBounds.width / 2))
  // Position window 4 pixels vertically below the tray icon
  const y = Math.round(trayBounds.y + trayBounds.height + 4)
  return {x: x, y: y}
}

const showWindow = () => {
  const position = getWindowPosition();
  window.setPosition(position.x, position.y, false);
  window.show();
}

const toggleWindow = () => {
  window.isVisible() ? window.hide() : showWindow();
}

const createTray = () => {
  tray = new Tray(path.join(__dirname, 'Group@2x.png'));
  tray.on('click', function (event) {
    toggleWindow();
})
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createTray();
  createWindow();
});

