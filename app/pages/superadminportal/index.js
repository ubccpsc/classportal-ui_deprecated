import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/user.actions';
import Logout from '../../modules/common/Logout';
import { Row, Column } from 'react-foundation';
import CourseList from '../../components/Course/CourseList';

class SuperAdminPortal extends React.Component {
	constructor() {
		super()
	}

	componentWillMount() {
		this.props.dispatch(userActions.getCurrentUser());
	}

	render() {
		return (
		  <div>
				<div className="grid-center-example">
				  <Row className="display">
				    <Column small={12} centerOnLarge><CourseList/></Column>
				</Row>
		  </div>
		  
		  <Logout
		    firstname={this.props.user.fname}
		    username={this.props.user.username}
		  />
		  </div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		user: state.user
	}
}

SuperAdminPortal.propTypes = {
  user: PropTypes.object
};

export default connect(mapStateToProps)(SuperAdminPortal);