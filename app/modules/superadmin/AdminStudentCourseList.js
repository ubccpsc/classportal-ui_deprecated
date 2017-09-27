import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';


function redirect(e) {
  e.preventDefault();
  browserHistory.push('/');
}

class AdminStudentCourseList extends React.Component {

	constructor(props) {
		super(props);
	}

	render () {
		return (
		  <div>
		    <div className="grid-center-example">
		      <Header user={this.props.user} />
		    </div>
		    <div>{this.props.children}</div>
		    <Footer />
		  </div>
		);
	} 
}

AdminStudentCourseList.PropTypes = {
	user: PropTypes.object
}

function mapStateToProps(state, ownProps) {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(AdminStudentCourseList);
