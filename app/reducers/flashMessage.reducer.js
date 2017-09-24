import * as types from '../actions/types.helper';
import initialState from './initial.state';
import shortid from 'shortid';

export default function flashMessage(state = initialState.flashMessage, action) {
  switch(action.type) {
  	case types.ADD_FLASH_MESSAGE:
  		return [{
  			type: action.message.type,
  			body: action.message.body,
  			headline: action.message.headline,
  			id: shortid.generate(),
  		}]
  	case types.CLEAR_FLASH_MESSAGE: 
  		return action.payload;
    default: 
      return state;
  }
}