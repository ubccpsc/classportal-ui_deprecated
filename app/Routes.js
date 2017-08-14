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
import SuperAdminPage from './pages/superadminportal';
import UsersTable from './components/Users/users.table';
import ErrorPage from './pages/error';
import App from './App';
import CourseList from './components/Course/CourseList';


export default () => (
  <Router history={history}>
    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage} onEnter={auth.requireAuthentication}/>
      <Route path="usersExample" component={UsersTable}>
        <Route path="/usersExample/:id" component={UsersTable}/>
      </Route>
      <Route path="login" component={LoginPage} onEnter={auth.checkUnauthenticated}/>
      <Route path="/superadmin" component={SuperAdminPage}>
        <Route path="/superadmin/courses"/>
      </Route>
      <Route path="postLogin" component={PostLoginPage} onEnter={auth.requireAuthentication, auth.checkUnauthenticated}/>
      <Route path="*" component={ErrorPage}/>
    </Route>
  </Router>
);