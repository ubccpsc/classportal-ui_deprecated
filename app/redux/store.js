import { compose, createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { logger } from 'redux-logger';
import rootReducer from './reducers';

const middleware = [
  logger,
];

const enhancers = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

/**
 * CREATE STORE 
 */

const store = createStore(
  rootReducer,
  {}, // takes initial state, which is an empty object
  enhancers
);

export const history = syncHistoryWithStore(browserHistory, store);
export { store };