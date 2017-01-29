/**
 * Allow entry only if user is not logged in.
 * If the user is logged in, redirect to '/'
 */
function requireNoAuth(nextState, replace) {
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
function requireAuth(nextState, replace) {
  if (!localStorage.token) {
    // console.log(localStorage: ${JSON.stringify(localStorage)}`);
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}

export { requireNoAuth, requireAuth };
