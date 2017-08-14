import * as types from '../actions/types.helper';
import initialState from './initial.state';

export default function coursesReducer(state = initialState.courses, action) {
  switch(action.type) {
    case types.GET_ALL_COURSES_FULFILLED:
      return action.payload.response;
    default: 
      return state;
  }
}