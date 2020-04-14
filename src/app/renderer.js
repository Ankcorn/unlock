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

const state = {
  page: 'home',
  homeData: ['Google @ NearST', 'Shop-Owners', 'Testing'],
  jwtData: {}
}
// new Home(data);
// new Jwt();
function onJWTClick(name) {
  ipcRenderer.send('change', { action: 'jwt-click', body: name })
}

function backHome() {
  ipcRenderer.send('change', { action: 'home-click' })
}

function build(state) {

  switch (state.page) {
    case 'home':
      return render(home({ onFooterClick, data: state.homeData, onJWTClick }), document.body);
    case 'jwt':
      return render(jwt({ back: backHome }), document.body);
    default:
      return render(home({ onFooterClick, data: state.homeData, onJWTClick }), document.body);
  }
}

ipcRenderer.on('update', (event, arg) => {
  console.log(arg) // prints "pong"
  build(arg)
})
build(state);

ipcRenderer.send('change', { 'hi': 'ho' })
