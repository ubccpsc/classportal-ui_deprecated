import React from 'react';
import { Spinner } from 'elemental';
import Module from '../../components/Module/Module';

const PostLogin = () => (
  <Module title="Loading files...">
    <Spinner size="lg" type="primary" />
  </Module>
);

export default PostLogin;
