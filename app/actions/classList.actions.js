import classListApi from '../api/classList.api';
import * as types from './types.helper';

// gets a classList of all students in the course
export function getClassList(courseNum) {
  return {
    type: types.GET_CLASS_LIST,
    payload: classListApi.getClassList(courseNum),
  }
}

// uploads a csv of students to a course number
export function uploadClassList(courseNum, csvFormData) {
	return {
		type: types.UPLOAD_CLASS_LIST,
		payload: classListApi.uploadClassList(courseNum, csvFormData),
	}
}
