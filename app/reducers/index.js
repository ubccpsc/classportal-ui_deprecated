import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import users from './users.reducer';
import user from './user.reducer';
import authStatus from './auth.reducer';

export default combineReducers({
  routing: routerReducer,
  users,
  user,
  authStatus,
  helloWorld: () => ['hello', 'ubc'],
});