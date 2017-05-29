import * as types from '../actions/types.helper';
import initialState from './initial.state';

export default function userReducer(state = initialState.users, action) {
  console.log(action.type);
  console.log(action.users);
  console.log(action);
  switch(action.type) {
    case types.FETCH_USERS_FULFILLED:
      return action.payload.response;
    default: 
      return state;  
  }
}