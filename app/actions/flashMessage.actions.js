import * as types from './types.helper';

// Creates repos for all teams
// @param message String that you want in flash message.
export function addFlashMessage(message) {
  return {
    type: types.ADD_FLASH_MESSAGE,
    message
  }
}

export function clearFlashMessage() {
  return {
    type: types.CLEAR_FLASH_MESSAGE,
    payload: [],
  }
}