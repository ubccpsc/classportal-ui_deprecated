import UserApi from '../api/user.api';
import * as types from './types.helper';

// Fetches the user info of the logged in user
export function getCurrentUser() {
	return {
		type: types.GET_CURRENT_USER,
		payload: UserApi.getCurrentUser(),
	}
}

export function getMyCourses() {
	return { 
		type: types.GET_MY_COURSES,
		payload: UserApi.getMyCourses(),
	}
}


// ADMIN FUNCTIONS 

export function getAllAdmins() {
	return {
		type: types.GET_ALL_ADMINS,
		payload: UserApi.getAllAdmins(),
	}
}