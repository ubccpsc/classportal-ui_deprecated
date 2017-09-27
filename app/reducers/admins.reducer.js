import * as types from '../actions/types.helper';
import initialState from './initial.state';

export default function adminsReducer(state = initialState.admins, action) {
  switch(action.type) {
    case types.GET_ALL_ADMINS_FULFILLED:
      return action.payload.response;
    default: 
      return state;
  }
}