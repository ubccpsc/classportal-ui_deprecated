import AuthApi from '../api/auth.api';
import * as types from './types.helper';

// gets a list of all users in the database
export function logout() {
  return {
    type: types.LOGOUT,
    payload: AuthApi.logout(),
  }
}
