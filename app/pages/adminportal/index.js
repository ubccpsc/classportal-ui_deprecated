import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as UserActions from '../../actions/user.actions';
import Logout from '../../modules/common/Logout';

// import AdminStudentsView from './Admin/AdminStudentsView';

const AdminPortal = (props) => (
  <div>
    <Logout
      firstname={props.user.fname}
      username={props.user.username}
    />
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