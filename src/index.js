// import '../common/polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

export function init() {
  ReactDOM.render(
  <App />,
  document.getElementById('app')
);
}

init();
