import React, { PropTypes } from 'react';
import { Spinner } from 'elemental';
import Module from '../../components/Module/Module';
import { Row, Column } from 'react-foundation';

const PostLogin = (props) => (
	  <div>
		  <Module title={'Connecting to GitHub'}>
		    <Spinner size="lg" type="primary" />
		  </Module>
	  </div>
);

PostLogin.propTypes = {
  error: PropTypes.bool,
};

export default PostLogin;
