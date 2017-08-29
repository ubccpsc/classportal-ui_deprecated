import * as types from '../actions/types.helper';
import initialState from './initial.state';

export default function myTeamsReducer(state = initialState.myTeams, action) {
  switch(action.type) {
    case types.GET_MY_TEAMS_PER_COURSE_FULFILLED:
      return action.payload.response;
    default: 
      return state;  
  }
}