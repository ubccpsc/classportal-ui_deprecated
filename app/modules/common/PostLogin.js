import React, { PropTypes } from 'react';
import { Spinner } from 'elemental';
import Module from '../../components/Module/Module';

const PostLogin = (props) => (
  <Module title={'Connecting to GitHub'}>
    <Spinner size="lg" type="primary" />
  </Module>
);

PostLogin.propTypes = {
  error: PropTypes.bool,
};

export default PostLogin;
