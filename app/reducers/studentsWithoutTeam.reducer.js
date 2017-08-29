import * as types from '../actions/types.helper';
import initialState from './initial.state';

export default function currentTeamReducer(state = initialState.studentsWithoutTeam, action) {
  switch(action.type) {
    case types.GET_STUDENTS_WITHOUT_TEAM_FULFILLED:
      return action.payload.response;
    default: 
      return state;  
  }
}