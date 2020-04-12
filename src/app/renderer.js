import './index.css';
import { render } from 'lit-html'

// import Jwt from './jwt';
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
function build(state) {
 

  switch(state.page) {
    case 'home':
      return render(home({ onFooterClick, data: state.homeData }), document.body);
    case 'jwt':
      return render(jwt(), document.body);
    default:
      return render(home({ onFooterClick, data: state.homeData }), document.body);
  }
}

build(state);
