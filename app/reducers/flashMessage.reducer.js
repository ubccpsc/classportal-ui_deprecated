import * as types from '../actions/types.helper';
import initialState from './initial.state';
import shortid from 'shortid';

export default function flashMessage(state = initialState.flashMessage, action) {
  switch(action.type) {
  	case types.ADD_FLASH_MESSAGE:
  		return [{
  			type: action.message.type,
  			text: action.message.text,
  			id: shortid.generate(),
  		}]
    default: 
      return state;
  }
}