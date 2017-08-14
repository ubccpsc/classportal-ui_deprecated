import fetch from 'isomorphic-fetch'
import config from '../config';
import * as options from './api.settings';

class StudentApi {
  static getAllStudents(courseNum) {
    return fetch(`${config.apiAddress}/${courseNum}/students`, options.authenticated)
      .then(students => {
        return students.json();
      })
      .catch(err => {
        console.log(`user.api::getAllStudents() ERROR: No response from API: ${err}`);
      });
  }
}

export default StudentApi;