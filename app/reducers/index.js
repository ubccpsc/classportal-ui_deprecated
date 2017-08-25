import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import students from './students.reducer';
import user from './user.reducer';
import courses from './courses.reducer';
import classList from './classList.reducer';
import authStatus from './auth.reducer';
import labSections from './labSections.reducer';
import deliverables from './deliverables.reducer';
import courseSettings from './courseSettings.reducer';
import myActiveCourse from './myActiveCourse.reducer';
import myCourses from './myCourses.reducer';
import teams from './teams.reducer';
import github from './github.reducer';
import labs from './labs.reducer';
import admins from './admins.reducer';
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
  teams,
  authStatus,
  courses,
  myActiveCourse,
  myCourses,
  labs,
  classList,
  deliverables,
  github,
  admins,
  labSections,
  courseSettings,
  helloWorld: () => ['hello', 'ubc'],
});

export default rootReducer;