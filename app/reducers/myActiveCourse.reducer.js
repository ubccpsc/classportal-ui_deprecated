import * as types from '../actions/types.helper';
import initialState from './initial.state';

export default function myActiveCourseReducer(state = initialState.myActiveCourse, action) {
  switch(action.type) {
    case types.SELECT_MY_ACTIVE_COURSE_FULFILLED:
      return action.payload.response;
    default: 
      return state;  
  }
}