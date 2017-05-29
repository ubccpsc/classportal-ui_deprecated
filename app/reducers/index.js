import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import users from './user.reducer';

export default combineReducers({
  routing: routerReducer,
  users,
  helloWorld: () => ['hello', 'ubc'],
});