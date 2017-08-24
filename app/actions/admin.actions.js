import AdminApi from '../api/admin.api';
import * as types from './types.helper';

export function getAllAdmins() {
	return {
		type: types.GET_ALL_ADMINS,
		payload: UserApi.getAllAdmins(),
	}
}
