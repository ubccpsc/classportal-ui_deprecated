import fetch from 'isomorphic-fetch'
import config from '../config';
import * as options from './api.settings';

class UserApi {
  static getAllUsers(courseNum) {
    return fetch(`${config.apiAddress}/${courseNum}/students`)
      .then(users => {
        return users.json();
      })
      .catch(err => {
        console.log(`user.api::getAllUsers() ERROR: No response from API: ${err}`);
      });
  }

  static getUserDetails(username) {
    return fetch(`${config.apiAddress}/${courseNum}/students`)
      .then(response => {
        return response.json();
      })
      .catch(err => {
        console.log(`user.api::getUserDetails() ERROR: No response from API: ${err}`);
      });
  }

  static getCurrentUser() {
    return fetch(`${config.apiAddress}/currentUser`, options.authenticated)
      .then(response => {
        return response.json();
      })
      .catch(err => {
        console.log(`user.api::getCurrentUser() ERROR: No response from API: ${err}`);
      });
  }

  static getUserRole() {
    return fetch(`${config.apiAddress}/currentUser`, options.authenticated)
      .then(response => {
        return response.json()
      })
      .then((user) => {
        return user.role;
      })
  }
}

export default UserApi;