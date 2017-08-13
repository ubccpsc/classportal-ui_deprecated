/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import config from '../../config';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Links from '../Links/Links';
import { connect } from 'react-redux';


function redirect(e) {
  e.preventDefault();
  browserHistory.push('/');
}

class Layout extends React.Component {

	constructor(props) {
		super(props);
	}

	render () {
		return (
		  <div>
		  	{JSON.stringify(this.props.user)}
		    <div className="grid-center-example">
		      <Header user={this.props.user} />
		    </div>
		    <div>{this.props.children}</div>
		    <Footer />
		  </div>
		);
	} 
}

Layout.PropTypes = {
	user: PropTypes.object
}

function mapStateToProps(state, ownProps) {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(Layout);
