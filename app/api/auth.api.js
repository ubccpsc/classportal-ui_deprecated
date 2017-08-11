import fetch from 'isomorphic-fetch'
import config from '../config';
import * as options from './api.settings';

const LOGOUT_CONFIRMATION_MESSAGE = "Successfully logged out";
const LOGGED_IN = "Logged in";
const LOGGED_OUT = "Logged out";
const UNAUTHENTICATED = "Unauthenticated";


class AuthApi {
  static logout() {
    return fetch(`${config.apiAddress}/logout`, options.authenticated)
      .then(logoutStatus => {
        return logoutStatus.json();
      })
      .then(isLoggedIn => {
        return isLoggedIn.response == LOGOUT_CONFIRMATION_MESSAGE ? LOGGED_OUT : LOGGED_IN;
      })
      .catch(err => {
        console.log(`auth.api::logout() ERROR: No response from API: ${err}`);
      });
  }

  static isAuthenticated() {
    return fetch(`${config.apiAddress}/isAuthenticated`, options.authenticated)
      .then(authenticationStatus => {
        return authenticationStatus.json();
      })
      .then(status => {
        return status.response === true ? LOGGED_IN : UNAUTHENTICATED;
      })
      .catch(err => {
        console.log(`auth.api::isAuthenticated() ERROR: ${err}`);
      });
  }
}

export default AuthApi;