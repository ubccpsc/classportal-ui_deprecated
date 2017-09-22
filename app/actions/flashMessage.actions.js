import * as types from './types.helper';

// Creates repos for all teams
// @param message String that you want in flash message.
export function addFlashMessage(message) {
  return {
    type: types.ADD_FLASH_MESSAGE,
    message
  }
}

export function createReposForUsers(courseId, deliverableName) {
  return {
    type: types.CREATE_REPOS_FOR_USERS,
    payload: GithubApi.createReposForUsers(courseId, deliverableName),
  }
}