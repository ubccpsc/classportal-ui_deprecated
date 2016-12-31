// Allow entry only if user is not logged in.
// If the user is logged in, redirect to '/' or '/admin'.
function requireNoAuth(nextState, replace) {
  if (localStorage.token) {
    // console.log(`Index.js::requireNoAuth| Logged in: redirecting to portal..
    // localStorage: ${JSON.stringify(localStorage)}`);
    replace({
      pathname: localStorage.admin === 'true' ? 'admin/' : '/',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}

// Allow entry only if user is logged in as a student.
// If token doesn't exist, redirect to '/login'.
// If admin, redirect to '/admin'.
function requireStudentAuth(nextState, replace) {
  if (!localStorage.token) {
    // console.log(`Index.js::requireStudentAuth| Not logged in: redirecting to login page..
    // localStorage: ${JSON.stringify(localStorage)}`);
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }

  if (localStorage.admin === 'true') {
    // console.log(`Index.js::requireStudentAuth| Not a student! Redirecting..
    // localStorage: ${JSON.stringify(localStorage)}`);
    replace({
      pathname: '/admin',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}

// Allow entry only if user is logged in as a student.
// If token doesn't exist, redirect to '/login'.
// If student, redirect to '/'.
function requireAdminAuth(nextState, replace) {
  if (!localStorage.token) {
    // console.log(`Index.js::requireAdminAuth| Not logged in: redirecting to login page..
    // localStorage: ${JSON.stringify(localStorage)}`);
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }

  if (localStorage.admin !== 'true') {
    // console.log(`Index.js::requireAdminAuth| Not an admin! Redirecting..
    // localStorage: ${JSON.stringify(localStorage)}`);
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}

export { requireNoAuth, requireStudentAuth, requireAdminAuth };
