import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as teamActions from '../../actions/team.actions';
import * as courseActions from '../../actions/course.actions';
import LoadingMessage from '../../modules/common/LoadingMessage';
import BatchDelivAdminTeamListTable from './BatchDelivTeam/BatchDelivAdminTeamListTable';
import { Button } from 'elemental';
import { Link } from 'elemental';

class AdminAdminTeamListTable extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		let that = this;
		this.props.dispatch(teamActions.getMyTeamsPerCourse(this.props.params.courses));
		this.props.dispatch(teamActions.getStudentsWithoutTeam(this.props.params.courses));
		this.props.dispatch(courseActions.getCourseDetails(this.props.params.courses));
	}

	render () {

		if (this.props.course.markDelivsByBatch !== null && this.props.course.markDelivsByBatch == true ) {
			return (
				<AdminBatchTeamListTable studentsWithoutTeam={this.props.studentsWithoutTeam} 
				courseId={this.props.params.courses}
				course={this.props.course} 
				myTeams={this.props.myTeams}
				/>
			)
		}
		else {
			return ( 
					null
				) 
		}
	}
}

AdminTeamListTable.propTypes = {
	studentsWithoutTeam: PropTypes.array.isRequired,
	course: PropTypes.object.isRequired,
	myTeams: PropTypes.object.isRequired,
}

function mapStateToProps(state, ownState) {
	return {
		studentsWithoutTeam: state.studentsWithoutTeam,
		myTeams: state.myTeams,
		course: state.course,
	}
}

export default connect(mapStateToProps)(AdminTeamListTable);