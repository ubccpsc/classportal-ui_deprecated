import * as types from '../actions/types.helper';
import initialState from './initial.state';
import {browserHistory} from 'react-router';

export default function teamsReducer(state = initialState.teams, action) {

  switch(action.type) {
    case types.GET_COURSE_TEAMS_FULFILLED:
      return action.payload.response;
    case types.GET_COURSE_TEAMS_PER_SECTION_FULFILLED:
      return action.payload.response;
    case types.GET_COURSE_TEAMS_PER_USER_FULFILLED:
      return action.payload.response;
    case types.IS_STUDENT_IN_SAME_LAB_FULFILLED:
      if (action.payload.response.inSameLab && state.indexOf(action.payload.response.username) < 0) {
        return [...state, action.payload.response.username];
      } 
      else {
        return state;
      }
    case types.CREATE_CUSTOM_TEAM_FULFILLED:
      return [];
    case types.REMOVE_STUDENT_FROM_TENTATIVE_TEAM:
      let newState = [];
      let payloadUsername = String(action.payload)
      for (let i = 0; i < state.length; i++) {
        let username = String(state[i]);
        if (username !== payloadUsername) {
          newState.push(username);
        }
      }
      return newState;
    default: 
      return state;  
  }
}