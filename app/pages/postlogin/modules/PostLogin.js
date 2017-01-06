/* eslint-disable no-useless-escape */

import React from 'react';
import { Spinner } from 'elemental';
import Module from '../../../components/Module/Module';

const PostLogin = (props) => (
  <Module title={props.error ? 'Error! Redirecting to Login' : 'Connecting to GitHub'}>
    <Spinner size="lg" type="primary" />
  </Module>
);

export default PostLogin;
