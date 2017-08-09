import * as types from '../actions/types.helper';
import initialState from './initial.state';

export default function userReducer(state = initialState.user, action) {
  console.log('user.reducer::userReducer() action type:' + action.type);
  console.log('user.reducer::userReducer() action: ' + action);
  console.log(action);
  switch(action.type) {
    case types.FETCH_CURRENT_USER_FULFILLED:
      return action.payload.user;
    default: 
      return state;  
  }
}