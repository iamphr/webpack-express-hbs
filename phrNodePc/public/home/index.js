// import _ from 'lodash';
// import './style.scss';
// import Icon from './xys.png';
// const _ = require('lodash');
require('./style.scss');
require('./xys.png');

// const $ =require('jquery');
// require('jquery.animate-number');
// const test = require('jquery.animate-number');
// import test from 'jquery.animate-number';
function component() {
  let phrtest = 123;
  const element = document.createElement('div');
  $(element).html('hello webpack-jq');
  // element.innerHTML = 'hello webpack111';
  element.classList.add('hello');

  return element;
}

window.onload = function () {
  document.body.appendChild(component());
  // $('#fun-level').animateNumber(
  //   {
  //     number: 100,
  //     color: 'green', // require jquery.color
  //     'font-size': '50px',
  //     easing: 'easeInQuad', // require jquery.easing
  //     // optional custom step function
  //     // using here to keep '%' sign after number
  //     numberStep: function(now, tween) {
  //       var floored_number = Math.floor(now),
  //         target = $(tween.elem);
  //
  //       target.text(floored_number + ' %');
  //     }
  //   },
  //   1800
  // );
}



