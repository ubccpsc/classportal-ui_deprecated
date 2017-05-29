import fetch from 'isomorphic-fetch'
import config from '../config';

console.log('made it in the class');

class UserApi {
  static fetchAllUsers(courseNum: number) {
      console.log('hello. inside UsersAPI class.');
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
    }
}

export default UserApi;