import UserApi from '../api/user.api';
import * as types from './types.helper';

// gets a list of all students in the course
export function getMyCourses() {
  return {
    type: types.GET_MY_COURSES,
    payload: UserApi.getMycourses(),
  };
}
