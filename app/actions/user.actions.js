import UserApi from '../api/user.api';
import * as types from './types.helper';

// gets a list of all users in the database
export function getAllUsers() {
  return {
    type: types.GET_USERS,
    payload: UserApi.getAllUsers(710),
  }
}

// Fetches the user info of the logged in user
export function getCurrentUser() {
	return {
		type: types.GET_CURRENT_USER,
		payload: UserApi.getCurrentUser(),
	}
}