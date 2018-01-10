import _ from 'lodash';
import './style.scss';
import Icon from './xys.png';
function component() {
  let phrtest = 123;
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
  console.log(phrtest);
}

document.body.appendChild(component());


// const renderHome = (req,res) => {
//   // res.send(123)
//   res.send('respond with a resource111234555');
// }
// module.exports = renderHome;
