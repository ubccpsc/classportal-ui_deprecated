import { compose, createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers';

let middleware;

let enhancers;

const ENVIRONMENT_MODE = String(process.env.NODE_ENV);

console.log('mode' + ENVIRONMENT_MODE);
if (ENVIRONMENT_MODE === 'production') {
	middleware = [
	  thunk,
	  promiseMiddleware(),
	];
	enhancers = compose(
  		applyMiddleware(...middleware)
	);
} else {
	middleware = [
	  thunk,
	  logger,
	  promiseMiddleware(),
	];
	enhancers = compose(
  		applyMiddleware(...middleware),
  		window.devToolsExtension ? window.devToolsExtension() : f => f
	);
}


/**
 * CREATE STORE 
 */

const store = createStore(
  rootReducer,
  {}, // takes initial state, which is an empty object
  enhancers
);

const history = syncHistoryWithStore(browserHistory, store);
export { store, history };