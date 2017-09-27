import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
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
				if (this.props.user.userrole !== 'admin' ) {
					browserHistory.push(`/404`);
				}
			});
		}
	}

	render() {
		return (
        <Column className="student-portal-page">
          {this.props.children}
        </Column>
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