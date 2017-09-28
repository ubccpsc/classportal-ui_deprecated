import fetch from 'isomorphic-fetch'
import config from '../config';
import * as options from './api.settings';

class UserApi {
  static getUserDetails(username) {
    // TODO: what is courseNum in this context?
    // TODO: is this code used anywhere?
    return fetch(`${config.apiAddress}/${courseNum}/students`, options.AUTHENTICATED)
      .then(response => {
        return response.json();
      })
      .catch(err => {
        console.log(`user.api::getUserDetails() ERROR: No response from API: ${err}`);
      });
  }

  static getCurrentUser() {
    return fetch(`${config.apiAddress}/currentUser`, options.AUTHENTICATED)
      .then(response => {
        return response.json();
      })
      .catch(err => {
        console.log(`user.api::getCurrentUser() ERROR: No response from API: ${err}`);
      });
  }

  static getUserRole() {
    return fetch(`${config.apiAddress}/currentUser`, options.AUTHENTICATED)
      .then(response => {
        return response.json();
      })
      .then((user) => {
        return user.role;
      });
  }

  static getMyCourses() {
    return fetch(`${config.apiAddress}/myCourses`, options.AUTHENTICATED)
      .then(response => {
        return response.json();
      });
  }

  static getAllAdmins() {
    return fetch(`${config.apiAddress}/getAllAdmins`, options.AUTHENTICATED)
      .then(response => {
        return response.json();
      });
  }
}

export default UserApi;

