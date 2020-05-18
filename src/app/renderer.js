import './index.css';
import { render } from 'lit-html';
import { ipcRenderer } from 'electron';

import jwt from './jwt';
import home from './home';
import create from './create';


function onFooterClick() {
  ipcRenderer.send('change', { type: 'CREATE_CLICK' })
}

function onJWTClick(name) {
  console.log('hi')
  ipcRenderer.send('change', { type: 'JWT_CLICK', payload: name })
}

function backHome() {
  ipcRenderer.send('change', { type: 'HOME_CLICK' })
}

function quitApplication() {
  ipcRenderer.send('change', { type: 'EXIT' })
}

function copyToken(payload) {
  ipcRenderer.send('change', { type: 'COPY_TOKEN', payload })
  new Notification('JWT Copied', {
    body: 'Copied the ID Token from Google @ NearSt'
  })
}

function submit(e) {
  e.preventDefault()
  ipcRenderer.send('change', {
    type: 'CREATE_TOKEN', payload: [].reduce.call(e.target.elements, (sum, el) => ({
      ...sum,
      ...el.value && { [el.name.toLowerCase().replace(/\s/g, "-")]: el.value }
    }), {})
  })
}

function deleteToken(name) {
  ipcRenderer.send('change', {
    type: 'DELETE_TOKEN', payload: name
  })
}

function build(state) {

  switch (state.page) {
    case 'home':
      return render(home({ onFooterClick, onJWTClick, quitApplication, data: state.homeData, }), document.body);
    case 'jwt':
      return render(jwt({ back: backHome, deleteToken, copyToken, name: state.name, token: state.activeToken, }), document.body);
    case 'create':
      return render(create({ back: backHome, submit }), document.body)
    default:
      return render(home({ onFooterClick, onJWTClick, quitApplication, data: state.homeData }), document.body);
  }
}

ipcRenderer.on('update', (event, arg) => {
  console.log(arg)
  build(arg)
})

ipcRenderer.send('change', { 'type': 'INIT' })
