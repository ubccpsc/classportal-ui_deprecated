import UserApi from '../api/user.api';
import * as types from './types.helper';

// Fetches the user info of the logged in user
export function getCurrentUser() {
	return {
		type: types.GET_CURRENT_USER,
		payload: UserApi.getCurrentUser(),
	}
}