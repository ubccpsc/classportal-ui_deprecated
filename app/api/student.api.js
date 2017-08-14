import fetch from 'isomorphic-fetch'
import config from '../config';
import * as options from './api.settings';

class StudentApi {
  static getAllStudents(courseNum) {
    return fetch(`${config.apiAddress}/${courseNum}/admin/students`, options.authenticated)
      .then(students => {
        return students.json();
      })
      .catch(err => {
        console.log(`student.api::getAllStudents() ERROR: No response from API: ${err}`);
      });
  }

  static uploadClassList(courseNum, csvFormData) {

  	const AUTHENTICATED_FILE_POST = {
		method: 'post',
		credentials: 'include',
		body: csvFormData,
	}

  	return fetch(`${config.apiAddress}/${courseNum}/`, AUTHENTICATED_FILE_POST)
  	  .then(result => {
  	  	return result.json();
  	  })
  	  .catch(err => {
  	  	console.log(`student.api::uploadClassList(courseNum, csvFormData) ERROR: No response from API: ${err}`)
  	  });
  }
}

export default StudentApi;

export function updateClassRequest(csvFormData) {
  return fetch(`${config.apiAddress}/api/class`, {
    method: 'post',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
    },
    body: csvFormData,
  })
    .then(checkStatus)
    .then(getJson)
    .catch(checkNetworkError);
}
