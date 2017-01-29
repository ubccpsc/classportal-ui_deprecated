import React from 'react';
import Login from './modules/Login';
import Privacy from './modules/Privacy';
import UploadClasslist from '../../components/AdminPortal/AdminStudents/UploadClasslist';

const LoginPage = () => (
  <div>
    <Login />
    <Privacy />
    <UploadClasslist />
  </div>
);

export default LoginPage;
