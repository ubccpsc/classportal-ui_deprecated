import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import * as auth from './auth';
import { history, store } from './store';
import Layout from './components/Layout/Layout';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import PostLoginPage from './pages/postlogin';
import AdminPage from './pages/adminportal';
import StudentPage from './pages/studentportal';
import SuperAdminPage from './pages/superadminportal';
import ClassListTable from './components/ClassList/ClassListTable';
import AdminListTable from './components/Admin/AdminListTable';
import LabListTable from './components/LabList/LabListTable';
import DeliverableListTable from './components/Deliverable/DeliverableListTable';
import DeliverableRepoOptions from './components/DeliverableRepo/DeliverableRepoOptionsTable';
import TeamListTable from './components/Team/TeamListTable';
import CourseSettingsListTable from './components/CourseSettings/CourseSettingsListTable';
import ErrorPage from './pages/error';
import App from './App';
import SuperAdminCourseList from './components/Course/SuperAdminCourseList';
import AdminCourseListTable from './components/Course/AdminCourseListTable';
import StudentCourseListTable from './components/Course/StudentCourseListTable';


export default () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRoute component={HomePage} onEnter={auth.checkAuthenticated, auth.requireAuthentication}/>
        <Route path="usersExample" component={ClassListTable}>
          <Route path="/usersExample/:id" component={ClassListTable}/>
        </Route>
        <Route path="login" component={LoginPage} onEnter={auth.checkUnauthenticated}/>
        <Route path="/superadmin" component={SuperAdminPage}>
          <Route path="/superadmin/courses" component={SuperAdminCourseList}/>
          <Route path="/superadmin/:courses/students" component={ClassListTable} />
          <Route path="/superadmin/:courses/deliverables" component={DeliverableListTable}/>
          <Route path="/superadmin/:courses/settings" component={CourseSettingsListTable}/>
          <Route path="/superadmin/labs" component={SuperAdminCourseList}/>
          <Route path="/superadmin/:courses/labs" component={LabListTable}/>
          <Route path="/superadmin/:courses/teams" component={TeamListTable}/>
          <Route path="/superadmin/students" component={ClassListTable} />
        </Route>
        <Route path="admin" component={AdminPage}>
          <Route path="/admin/courses" component={AdminCourseListTable}/>
          <Route path="/admin/:courses/settings" component={CourseSettingsListTable}/>
          <Route path="/admin/:courses/settings" component={CourseSettingsListTable}/>
          <Route path="/admin/:courses/settings" component={CourseSettingsListTable}/>
          <Route path="/admin/:courses/deliverable" component={CourseSettingsListTable}/>
          <Route path="/admin/:courses/:deliverableName/repos" component={DeliverableRepoOptions}/>
        </Route>
        <Route path="students" component={StudentPage}>
          <Route path="/students/courses" component={StudentCourseListTable}/>
          <Route path="/students/:courses/deliverables" component={DeliverableListTable}/>
          <Route path="/students/:courses/teams" component={TeamListTable}/>
        </Route>
        <Route path="postLogin" component={PostLoginPage} onEnter={auth.requireAuthentication, auth.checkUnauthenticated}/>
        <Route path="*" component={ErrorPage}/>
      </Route>
    </Router>
  </Provider>
);