import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Layout from './components/Layout/Layout';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import PostloginPage from './pages/postlogin';
import ErrorPage from './pages/error';
import * as auth from './auth';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage} onEnter={auth.loggedIn} />
      <Route path="login" component={LoginPage} onEnter={auth.notLoggedIn} />
      <Route path="register" component={RegisterPage} onEnter={auth.notLoggedIn} />
      <Route path="postLogin" component={PostloginPage} onEnter={auth.notLoggedIn} />
      <Route path="*" component={ErrorPage} />
    </Route>
  </Router>
), document.getElementById('app'));

// Enable Hot Module Replacement (HMR)
if (module.hot) {
  module.hot.accept();
}
