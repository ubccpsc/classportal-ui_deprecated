import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import users from './users.reducer';
import user from './user.reducer';
import courses from './courses.reducer';
import authStatus from './auth.reducer';

export default combineReducers({
  routing: routerReducer,
  users,
  user,
  authStatus,
  courses,
  helloWorld: () => ['hello', 'ubc'],
});