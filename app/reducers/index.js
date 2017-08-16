import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import students from './students.reducer';
import user from './user.reducer';
import courses from './courses.reducer';
import classList from './classList.reducer';
import authStatus from './auth.reducer';
import * as types from '../actions/types.helper';


// export default combineReducers({
//   routing: routerReducer,
//   students,
//   user,
//   authStatus,
//   courses,
//   classList,
//   helloWorld: () => ['hello', 'ubc'],
// });

const rootReducer = (state, action) => {
  if (action.type === types.LOGOUT) {
  	state = undefined;
  }

  return appReducer(state, action);
}

/* top level reducers */
const appReducer = combineReducers({  
  routing: routerReducer,
  students,
  user,
  authStatus,
  courses,
  classList,
  helloWorld: () => ['hello', 'ubc'],
});

export default rootReducer;