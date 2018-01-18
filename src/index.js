import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/scss/font-awesome.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';


const render = () => {
  const state = store.getState();
  ReactDOM.render(<App games={state.games}/>, document.getElementById('root'));
}
render();

store.subscribe(render);

registerServiceWorker();
