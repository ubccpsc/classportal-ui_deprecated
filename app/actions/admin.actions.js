import AdminApi from '../api/admin.api';
import * as types from './types.helper';

export function getAllAdmins() {
  return {
    type: types.GET_ALL_ADMINS,
    // TODO: should this be UserApi or AdminApi?
    payload: UserApi.getAllAdmins(),
  };
}
