import * as types from '../actions/types.helper';
import initialState from './initial.state';

export default function classListReducer(state = initialState.classList, action) {
  switch(action.type) {
    case types.UPLOAD_CLASS_LIST_FULFILLED:
      return action.payload.response;
    case types.GET_CLASS_LIST_FULFILLED:
   	  return action.payload.response;
   	case types.CLEAR_CLASS_LIST_FULFILLED:
   	  return state;
    default: 
      return state;  
  }
}