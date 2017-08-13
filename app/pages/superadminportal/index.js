import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as UserActions from '../../actions/user.actions';
import Logout from '../../modules/common/Logout';
import { Row, Column } from 'react-foundation';

const AdminPortal = (props) => (
  <div>
		<div className="grid-center-example">
		  <Row className="display">
		    <Column small={12} centerOnLarge>12 centered, large</Column>
		</Row>
  </div>

  <Logout
    firstname={props.user.fname}
    username={props.user.username}
  />
  </div>
);

AdminPortal.propTypes = {
  user: PropTypes.object
};

export default AdminPortal;