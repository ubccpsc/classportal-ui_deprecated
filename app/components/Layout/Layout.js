/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import config from '../../config';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Row, Column } from 'react-foundation';
import Links from '../Links/Links';
import FlashMessageList from '../FlashMessage/FlashMessageList';
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
		    <div>
		      <Header user={this.props.user} />
		    </div>
		    <Row>
		    	<FlashMessageList/>
		    	{this.props.children}
		    </Row>
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
