import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as UserActions from '../../actions/user.actions';
import Logout from '../../modules/common/Logout';
import { Button } from 'react-bootstrap';

// import AdminStudentsView from './Admin/AdminStudentsView';

const AdminPortal = (props) => (
  <div>
  console.log("admin" + props);
    <Logout
      firstname={props.user.fname}
      username={props.user.username}
    />
    <Button bsStyle="success" bsSize="small">
  Something
  </Button>
  </div>
);

AdminPortal.propTypes = {
  user: PropTypes.object
};

// function mapStateToProps(state, ownProps) {
// 	return {
// 	    user: state.user,
// 	}
// }

export default AdminPortal;