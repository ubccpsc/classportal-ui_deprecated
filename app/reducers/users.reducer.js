import * as types from '../actions/types.helper';
import initialState from './initial.state';

export default function usersReducer(state = initialState.users, action) {
  switch(action.type) {
    case types.GET_USERS_FULFILLED:
      return action.payload.response;
    default: 
      return state;  
  }
}