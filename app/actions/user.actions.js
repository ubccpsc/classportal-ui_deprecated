import UserApi from '../api/user.api';
import * as types from './types.helper';

// gets a list of all users in the database
export function fetchAllUsers() {
  return {
    type: types.FETCH_USERS,
    payload: UserApi.fetchAllUsers(710),
  }
}

// Fetches the user info of the logged in user
export function fetchCurrentUser() {
	return {
		type: types.FETCH_CURRENT_USER,
		payload: UserApi.fetchCurrentUser(),
	}
}