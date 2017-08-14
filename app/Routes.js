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
import StudentCourseTable from './components/StudentCourse/StudentCourseTable';
import ErrorPage from './pages/error';
import App from './App';
import CourseList from './components/Course/CourseList';


export default () => (
  <Router history={history}>
    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage} onEnter={auth.requireAuthentication}/>
      <Route path="usersExample" component={StudentCourseTable}>
        <Route path="/usersExample/:id" component={StudentCourseTable}/>
      </Route>
      <Route path="login" component={LoginPage} onEnter={auth.checkUnauthenticated}/>
      <Route path="/superadmin" component={SuperAdminPage}>
        <Route path="/superadmin/courses" component={CourseList}/>
        <Route path="/superadmin/students" component={StudentCourseTable} />
        <Route path="/superadmin/:courses/students" component={StudentCourseTable} />
      </Route>
      <Route path="postLogin" component={PostLoginPage} onEnter={auth.requireAuthentication, auth.checkUnauthenticated}/>
      <Route path="*" component={ErrorPage}/>
    </Route>
  </Router>
);