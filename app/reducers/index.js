import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import users from './users.reducer';
import user from './user.reducer';

export default combineReducers({
  routing: routerReducer,
  users,
  user,
  helloWorld: () => ['hello', 'ubc'],
});