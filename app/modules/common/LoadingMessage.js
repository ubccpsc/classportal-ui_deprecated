import React from 'react';
import { Spinner } from 'elemental';
import Module from '../../components/Module/Module';

const PostLogin = () => (
	<div className="row large-12 medium-12">
	  <Module title="Loading files...">
	    <Spinner size="lg" type="primary" />
	  </Module>
  	</div>
);

export default PostLogin;
