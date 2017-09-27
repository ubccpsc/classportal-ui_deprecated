import fetch from 'isomorphic-fetch'
import config from '../config';
import * as options from './api.settings';

class StudentApi {
  static getAllStudents(courseNum) {
    return fetch(`${config.apiAddress}/${courseNum}/admin/students`, options.AUTHENTICATED)
      .then(students => {
        return students.json();
      })
      .catch(err => {
        console.log(`student.api::getAllStudents() ERROR: No response from API: ${err}`);
      });
  }

  static uploadClassList(courseNum, classList) {

  	const AUTHENTICATED_FILE_POST = {
    	credentials: 'include',
  		method: 'post',
  		body: classList,
	}

  	return fetch(`${config.apiAddress}/${courseNum}/admin/students`, AUTHENTICATED_FILE_POST)
  	  .then(result => {
  	  	return result.json();
  	  })
  	  .catch(err => {
  	  	console.log(`student.api::uploadClassList(courseNum, csvFormData) ERROR: No response from API: ${err}`)
  	  });
  }
}

export default StudentApi;