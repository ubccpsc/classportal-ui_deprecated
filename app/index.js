import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux'; // this is where we connect Redux and React together.
import { store } from './redux/store';
import Routes from './Routes';

render((
  <Provider store={store}>
    <Routes/>
  </Provider>
), document.getElementById('root'));


// Enable Hot Module Replacement (HMR)
if (module.hot) {
  module.hot.accept();
}

