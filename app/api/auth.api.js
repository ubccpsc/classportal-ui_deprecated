import fetch from 'isomorphic-fetch'
import config from '../config';
import * as options from './api.settings';

class AuthApi {
  static logout() {
    return fetch(`${config.apiAddress}/logout`, options.authenticated)
      .then(logoutStatus => {
        console.log('logout JSON response:')
        console.log(logoutObject.json())
        return logoutStatus.json();
      })
      .catch(err => {
        console.log(err + 'error!');
      });
  }
}

export default AuthApi;