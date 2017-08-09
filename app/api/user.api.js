import fetch from 'isomorphic-fetch'
import config from '../config';


let options = {
  credentials: 'include'
}

class UserApi {
  static fetchAllUsers(courseNum: number) {
      return fetch(`${config.apiAddress}/${courseNum}/students`)
        .then(users => {
          return users.json();
        })
        .catch(err => {
          console.log(err + 'error!');
        });
    }

  static fetchUserDetails(username: string) {
      return fetch(`${config.apiAddress}/${courseNum}/students`)
        .then(response => {
          return response.json();
        })
        .catch(err => {
          console.log(err + 'error!');
        });
    }

  static fetchCurrentUser() {
      console.log(`${config.apiAddress}/currentUser`);
      return fetch(`${config.apiAddress}/currentUser`, options)
        .then(response => {
          return response.json();
        })
        .then(json => {
          console.log('this is the json' + json);
          return json;
        })
        .then(json => {
          return json;
        })
        .catch(err => {
          return `user.api::fetchCurrentUser() ERROR: No response from API: ${err}`;
        });
  }
}

export default UserApi;