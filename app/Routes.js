import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import * as auth from './auth';
import { history } from './store';
import Layout from './components/Layout/Layout';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import PostLoginPage from './pages/postlogin';
import AdminPage from './pages/adminportal';
import UsersTable from './components/Users/users.table';
import ErrorPage from './pages/error';
import App from './App';


export default () => (
  <Router history={history}>
    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage} onEnter={auth.checkAuthenticated, auth.requireAuthentication} />
      <Route path="users" component={UsersTable} >
        <Route path="/users/:id" component={UsersTable} />
      </Route>
      <Route path="login" component={LoginPage} onEnter={auth.checkUnauthenticated} />
      <Route path="register" component={RegisterPage} onEnter={auth.checkUnauthenticated} />
      <Route path="postLogin" component={PostLoginPage} onEnter={auth.checkUnauthenticated} />
      <Route path="admin" component={AdminPage} onEnter={auth.checkUnauthenticated} />
      <Route path="*" component={ErrorPage} />
    </Route>
  </Router>
);