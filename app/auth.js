import fetch from 'isomorphic-fetch';
import config from './config';
import * as options from './api/api.settings';

/**
 * Allow entry only if user is not logged in.
 * If the user is logged in, redirect to '/'
 */
function notLoggedIn(nextState, replace) {
  if (localStorage.token) {
    // console.log(localStorage: ${JSON.stringify(localStorage)}`);
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}

/**
 * Allow entry only if user is logged in.
 */
function loggedIn(nextState, replace) {
  if (!localStorage.token) {
    // console.log(localStorage: ${JSON.stringify(localStorage)}`);
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}

/**
 * Require Authentication Check through Restify when placed on Route
 * Since this will hammer the API, ideally this will be only used on 
 * Admin routes
 */
function requireAuth(nextState, replace) {
  if (!localStorage.token) {
    return fetch(`${config.apiAddress}/isAuthenticated`, { credentials: 'include' })
      .then(response => {
        console.log(response.json());
        return response.json();
      })
      .then(isLoggedIn => {
        if (isLoggedIn) {
          logger.info('logged in!');
          localStorage.token = true;
        }
        else {
          logger.info('logged out!');
          localStoage.token = false;
          return replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname },
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export { loggedIn, notLoggedIn, requireAuth };
