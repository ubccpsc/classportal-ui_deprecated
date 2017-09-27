/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import config from '../../config';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import StudentLinks from './StudentLinks';
import SuperAdminLinks from './SuperAdminLinks';
import AdminLinks from './AdminLinks';
import { connect } from 'react-redux';

class Links extends React.Component {

	constructor() {
		super();
	}

	render () {
		switch(this.props.user.userrole) {
			case 'superadmin':
				return (<SuperAdminLinks />);
			case 'admin':
				return (<AdminLinks />);
			case 'student':
				return (<StudentLinks />);
			default:
				return null;
		}
	}
}

Links.PropTypes = {
	user: PropTypes.object
}

function mapStateToProps(state, ownProps) {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(Links);