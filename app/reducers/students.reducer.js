import * as types from '../actions/types.helper';
import initialState from './initial.state';

export default function studentsReducer(state = initialState.students, action) {
  switch(action.type) {
    case types.GET_ALL_STUDENTS_FULFILLED:
      return action.payload.response;
    default: 
      return state;  
  }
}