import * as types from '../actions/types.helper';
import initialState from './initial.state';

export default function githubReducer(state = initialState.github, action) {
  switch(action.type) {
    case types.CREATE_REPOS_FOR_TEAMS_FULFILLED:
      return action.payload.response;
    case types.CREATE_REPOS_FOR_USERS_FULFILLED:
      return action.payload.response;
    default: 
      return state;
  }
}