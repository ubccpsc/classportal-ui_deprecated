import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import students from './students.reducer';
import user from './user.reducer';
import courses from './courses.reducer';
import classList from './classList.reducer';
import authStatus from './auth.reducer';

export default combineReducers({
  routing: routerReducer,
  students,
  user,
  authStatus,
  courses,
  classList,
  helloWorld: () => ['hello', 'ubc'],
});