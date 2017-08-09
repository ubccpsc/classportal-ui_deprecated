import fetch from 'isomorphic-fetch'
import config from '../config';


let options = {

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
    }
}

export default UserApi;