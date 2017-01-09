import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Layout from './components/Layout/Layout';
import StudentPortalContainer from './pages/student';
import AdminPortal from './pages/admin';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import PostloginPage from './pages/postlogin';
import { requireNoAuth, requireStudentAuth, requireAdminAuth } from './auth';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={StudentPortalContainer} onEnter={requireStudentAuth} />
      <Route path="login" component={LoginPage} onEnter={requireNoAuth} />
      <Route path="postlogin" component={PostloginPage} onEnter={requireNoAuth} />
      <Route path="register" component={RegisterPage} onEnter={requireNoAuth} />
      <Route path="admin" component={AdminPortal} onEnter={requireAdminAuth} />
    </Route>
  </Router>
), document.getElementById('app'));

// Enable Hot Module Replacement (HMR)
if (module.hot) {
  module.hot.accept();
}
