import './index.css';
import { render } from 'lit-html';
import { ipcRenderer } from 'electron';

import jwt from './jwt';
import home from './home'
// console.log('👋 This message is being logged by "renderer.js", included via webpack');

function onFooterClick() {
  console.log('hi')
  data.push('test')
}

// const state = {
//   page: 'home',
//   homeData: ['Google @ NearST', 'Shop-Owners', 'Testing'],
//   jwtData: {}
// }

function onJWTClick(name) {
  ipcRenderer.send('change', { type: 'JWT_CLICK', payload: name })
}

function backHome() {
  ipcRenderer.send('change', { type: 'HOME_CLICK' })
}

function copyToken(payload)  {
  ipcRenderer.send('change', { type: 'COPY_TOKEN', payload })
  new Notification('JWT Copied', {
    body: 'Copied the ID Token from Google @ NearSt'
  })
}
function build(state) {

  switch (state.page) {
    case 'home':
      return render(home({ onFooterClick, data: state.homeData, onJWTClick }), document.body);
    case 'jwt':
      return render(jwt({ back: backHome, user: state.activeUser, token: state.activeToken.AuthenticationResult.IdToken, copyToken }), document.body);
    default:
      return render(home({ onFooterClick, data: state.homeData, onJWTClick }), document.body);
  }
}

ipcRenderer.on('update', (event, arg) => {
  console.log(arg) // prints "pong"
  build(arg)
})

ipcRenderer.send('change', { 'type': 'INIT' })
