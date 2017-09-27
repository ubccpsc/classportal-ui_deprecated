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
    case types.IS_STUDENT_IN_CLASS_FULFILLED:
      console.log(action.payload);
      return [
        ...state.filter(classListItem => classListItem.username !== action.payload.response.username),
        action.payload.response.username
      ];
    default:
      return state;
  }
}