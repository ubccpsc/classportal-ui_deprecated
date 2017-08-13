/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import config from '../../config';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { connect } from 'react-redux';

class Links extends React.Component {

	constructor() {
		super();
	}

	render () {
		return (
			<ul className="links-hero-subnav">
	      <li><a href="#">Deliverables</a></li>
	      <li><a href="#" className="is-active">Grades</a></li>
	      <li><a target="_blank" href="http://zurb.com/responsive">Repositories</a></li>
    	</ul>
		);
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
