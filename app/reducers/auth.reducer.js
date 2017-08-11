import * as types from '../actions/types.helper';
import initialState from './initial.state';

export default function userReducer(state = initialState.user, action) {
  switch(action.type) {
    case types.LOGOUT_FULFILLED:
      return action.payload;
  	case types.IS_AUTHENTICATED_FULFILLED:
  	  return action.payload;
    default: 
      return state;
  }
}