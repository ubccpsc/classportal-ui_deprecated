import * as types from '../actions/types.helper';
import initialState from './initial.state';

export default function usersReducer(state = initialState.users, action) {
  console.log('user.reducer::usersReducer() action type:' + action.type);
  console.log('user.reducer::usersReducer() action.users: ' + action.users);
  console.log('user.reducer::usersReducer() action: ' + action);
  switch(action.type) {
    case types.FETCH_USERS_FULFILLED:
      return action.payload.response;
    default: 
      return state;  
  }
}