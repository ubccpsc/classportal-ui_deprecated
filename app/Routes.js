import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import * as auth from './auth';
import { history } from './redux/store';
import Layout from './components/Layout/Layout';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import PostLoginPage from './pages/postLogin';
import ErrorPage from './pages/error';
import App from './App';


export default () => (
  <Router history={history}>
    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage} onEnter={auth.loggedIn} />
      <Route path="login" component={LoginPage} onEnter={auth.notLoggedIn} />
      <Route path="register" component={RegisterPage} onEnter={auth.notLoggedIn} />
      <Route path="postLogin" component={PostLoginPage} onEnter={auth.notLoggedIn} />
      <Route path="*" component={ErrorPage} />
    </Route>
  </Router>
);