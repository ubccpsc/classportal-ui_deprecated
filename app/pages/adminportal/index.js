import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/user.actions';
import Logout from '../../modules/common/Logout';
import { Row, Column } from 'react-foundation';
import SuperAdminCourseList from '../../components/Course/SuperAdminCourseList';

class SuperAdminPortal extends React.Component {
	constructor() {
		super();
		this.authCheck = this.authCheck.bind(this);
	}

	componentWillMount() {
		this.authCheck();
	}

	authCheck() {
		if (this.props.user.userrole !== 'admin' || this.props.user.userrole !== 'superadmin') {
			this.props.dispatch(userActions.getCurrentUser()).then(response => {
				if (this.props.user.userrole !== 'superadmin' || this.props.user.userrole !== 'admin' ) {
					browserHistory.push(`/404`);
				}
			});
		}
	}

	render() {
		return (
		  <div>
				<div className="grid-center-example">
				  <Row className="main-child-component-area">
				    <Column small={12} centerOnLarge>{this.props.children}</Column>
					</Row>
		  	</div>
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