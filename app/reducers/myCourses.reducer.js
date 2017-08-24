import * as types from '../actions/types.helper';
import initialState from './initial.state';

export default function myCoursesReducer(state = initialState.myCourses, action) {
  switch(action.type) {
    case types.GET_MY_COURSES_FULFILLED:
      return action.payload.response;
    default: 
      return state;  
  }
}