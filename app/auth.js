import fetch from 'isomorphic-fetch';
import config from './config';
import * as options from './api/api.settings';

/* *********** NOTE: ************
 * *********** localStorage.token is deprecated and being replaced with
 * localStorage.isLoggedIn boolean.
 */ 


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
    fetch(`${config.apiAddress}/isAuthenticated`, { credentials: 'include' })
      .then(data => {
        return data.json();
      })
      .then(isLoggedIn => {
        if (isLoggedIn.response === true) {
          localStorage.loggedIn = true;
          localStorage.token = true;
        } else {
          localStorage.token = false;
          localStorage.loggedIn = false;
        }
      })
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    })
    .catch(err => {
      localStorage.token = false;
      localStorage.loggedIn = false;
      console.log(`auth::requireAuth() ERROR: ${err}`);
    });
  }
}

export { loggedIn, notLoggedIn, requireAuth };
