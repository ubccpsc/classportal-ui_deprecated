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
 * Allow entry only if user is logged in.
 */
function postLogin(nextState, replace) {
  if (!localStorage.temp) {
    // console.log(localStorage: ${JSON.stringify(localStorage)}`);
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}

export { loggedIn, notLoggedIn, postLogin };
