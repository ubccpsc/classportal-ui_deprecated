import UserApi from '../api/user.api';
import * as types from './types.helper';


export function fetchAllUsers() {
  return {
    type: types.FETCH_USERS,
    payload: UserApi.fetchAllUsers(710),
  }
}