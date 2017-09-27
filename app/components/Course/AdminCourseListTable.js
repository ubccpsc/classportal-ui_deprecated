import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/course.actions';
import * as classListActions from '../../actions/classList.actions';
import LoadingMessage from '../../modules/common/LoadingMessage';
import AdminCourseListRow from './AdminCourseListRow';


class AdminCourseListTable extends React.Component {
	constructor(props) {
		super(props);
		this.props.dispatch(classListActions.clearClassList());
	}

	componentWillMount() {
		this.props.dispatch(courseActions.getAllCourses());
	}

	render () {
		if (this.props.courses.length < 1) {
			return (
				<LoadingMessage />
			);
		}
		else {
			return (
				<table className="table-expand">
				  <thead>
				    <tr className="table-expand-row">
				      <th width="200">Course Number</th>
				      <th>Name</th>
				      <th width="150">Students Set Teams</th>
				      <th>Min Team Size</th>
				      <th width="150">Max Team Size</th>
							<th>Teams In Same Lab</th>
				      <th/>
				      <th/>
				    </tr>
				  </thead>
		        {this.props.courses.map(course => 
		        	<AdminCourseListRow key={course.courseId} course={course}/>
		        )}
				</table>
			);
		}
	}
}

AdminCourseListTable.propTypes = {
	courses: PropTypes.array.isRequired,
}

function mapStateToProps(state, ownState) {
	return {
		courses: state.courses
	}
}


export default connect(mapStateToProps)(AdminCourseListTable);