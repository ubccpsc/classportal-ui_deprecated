import StudentApi from '../api/student.api';
import * as types from './types.helper';

// gets a list of all students in the course
export function getAllStudents(courseNum) {
  return {
    type: types.GET_ALL_STUDENTS,
    payload: StudentApi.getAllStudents(courseNum),
  };
}

// uploads a csv of students to a course number
export function uploadClassList(courseNum, csvFormData) {
  return {
    type: types.UPLOAD_CLASS_LIST,
    payload: StudentApi.uploadClassList(courseNum, csvFormData),
  };
}
