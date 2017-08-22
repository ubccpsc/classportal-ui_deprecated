import * as types from '../actions/types.helper';
import initialState from './initial.state';

export default function teamsReducer(state = initialState.teams, action) {
  switch(action.type) {
    case types.GET_COURSE_TEAMS_FULFILLED:
      return action.payload.response;
    case types.GET_COURSE_TEAMS_PER_SECTION_FULFILLED:
      return action.payload.response;
    case types.GET_COURSE_TEAMS_PER_USER_FULFILLED:
      return action.payload.response;
    default: 
      return state;  
  }
}