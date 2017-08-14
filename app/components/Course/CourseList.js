import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/course.actions';
import LoadingMessage from '../../modules/common/LoadingMessage';
import CourseListRow from './CourseListRow';


class CourseList extends React.Component {
	constructor(props) {
		super(props);
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
				      <th>Deliverables</th>
				      <th className="text-right" width="150">Course Name</th>
				      <th width="150">Students Set Teams</th>
				    </tr>
				  </thead>
		        {this.props.courses.map(course => 
		        	<CourseListRow course={course}/>
		        )}
				</table>
			);
		}
	}
}

CourseList.propTypes = {
	courses: PropTypes.array.isRequired,
}

function mapStateToProps(state, ownState) {
	return {
		courses: state.courses
	}
}


export default connect(mapStateToProps)(CourseList);