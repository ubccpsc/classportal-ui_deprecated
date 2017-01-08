import React from 'react';
import Login from './modules/Login';
import Privacy from './modules/Privacy';
import UploadClasslist from '../admin/modules/students/UploadClasslist';

const LoginPage = () => (
  <div>
    <Login />
    <Privacy />
    <UploadClasslist />
  </div>
);

export default LoginPage;
