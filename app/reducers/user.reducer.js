import * as types from '../actions/types.helper';
import initialState from './initial.state';

export default function userReducer(state = initialState.user, action) {
  switch(action.type) {
    case types.GET_CURRENT_USER_FULFILLED:
      return action.payload.user;
    default: 
      return state;
  }
}