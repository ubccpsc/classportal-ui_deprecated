import StudentApi from '../api/student.api';
import * as types from './types.helper';

// gets a list of all students in the course
export function getAllStudents(courseNum) {
  return {
    type: types.GET_ALL_STUDENTS,
    payload: StudentApi.getAllStudents(courseNum),
  }
}
