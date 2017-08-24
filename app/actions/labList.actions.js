import labListApi from '../api/labList.api';
import * as types from './types.helper';

export function getLabSectionsFromCourse(courseNum) {
  return {
    type: types.GET_LAB_SECTIONS_FROM_COURSE,
    payload: labListApi.getLabSectionsFromCourse(courseNum),
  }
}

export function uploadLabList(courseNum, csvFormData) {
	return {
		type: types.UPLOAD_LAB_LIST,
		payload: labListApi.uploadLabList(courseNum, csvFormData),
	}
}

// clears the class list in Redux, such as before retrieving a new one
export function clearLabList() {
	return {
		type: types.CLEAR_LAB_LIST,
		payload: null,
	}
}