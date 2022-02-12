import _ from 'lodash';

import "./style.scss";

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this scrip
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());
  
  
