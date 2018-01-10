// import _ from 'lodash';
// import './style.scss';
// import Icon from './xys.png';
// const _ = require('lodash');
require('./style.scss');
require('./xys.png');

function component() {
  let phrtest = 123;
  const element = document.createElement('div');
  element.innerHTML = 'hello webpack111';
  element.classList.add('hello');

  return element;
  console.log(phrtest);
}

document.body.appendChild(component());


