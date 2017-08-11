import fetch from 'isomorphic-fetch'
import config from '../config';
import * as options from './api.settings';

const LOGOUT_CONFIRMATION_MESSAGE = "Successfully logged out";

class AuthApi {
  static logout() {
    return fetch(`${config.apiAddress}/logout`, options.authenticated)
      .then(logoutStatus => {
        return logoutStatus.json();
      })
      .then(isLoggedIn => {
        return isLoggedIn.response == LOGOUT_CONFIRMATION_MESSAGE ? "Logged out" : "Logged In";
      })
      .catch(err => {
        console.log(`auth.api::logout() ERROR: No response from API: ${err}`);
      });
  }
}

export default AuthApi;