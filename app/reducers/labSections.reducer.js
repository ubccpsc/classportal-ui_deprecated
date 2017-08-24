import * as types from '../actions/types.helper';
import initialState from './initial.state';

export default function labSectionsReducer(state = initialState.labSections, action) {
  switch(action.type) {
    case types.GET_LAB_SECTIONS_FROM_COURSE_FULFILLED:
      return action.payload.response;
    default: 
      return state;
  }
}