import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as teamActions from '../../../actions/team.actions';
import * as courseActions from '../../../actions/course.actions';
import LoadingMessage from '../../../modules/common/LoadingMessage';
import BatchDelivTeamListRow from './BatchDelivTeamListRow';
import BatchCurrentTeamListRow from './BatchCurrentTeamListRow';
import { Button } from 'elemental';
import { Link } from 'elemental';

class BatchDelivTeamListTable extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
	}

	render () {

		if (this.props.studentsWithoutTeam.length > 0 && Object.keys(this.props.myTeams).length > 0 ) {
			return (
			<div className="batch-team-list-table">
				<div className="row">
					<div className="people-you-might-know medium-12">
						<div className="add-people-header">
							<h6 className="header-title">
								Current Team
							</h6>
						</div>
					  { this.props.myTeams.members.map(teamMember =>
					  	<BatchCurrentTeamListRow key={teamMember._id} teamMember={teamMember}/>
					  )}
					</div>
				</div>
				<div className="row">
					<div className="people-you-might-know medium-12">
					  <div className="add-people-header">
					    <h6 className="header-title">
					      Add Team Members
					    </h6>
					  </div>
					  { this.props.studentsWithoutTeam.map(student =>
					  	<BatchDelivTeamListRow key={student._id} student={student}/>
					  )}
					  <div className="view-more-people">
					    <p className="view-more-text">
					      <a href="#" className="view-more-link">View More..</a>
					    </p>
					  </div>
					</div>
				</div>
			</div>
			)
		}
		else {
			return ( null );
		}
	}
}

BatchDelivTeamListTable.propTypes = {
	studentsWithoutTeam: PropTypes.array.isRequired,
	course: PropTypes.object.isRequired,
	myTeams: PropTypes.object.isRequired,
}

function mapStateToProps(state, ownState) {
	return {
		studentsWithoutTeam: state.studentsWithoutTeam,
		course: state.course,
		myTeams: state.myTeams,
	}
}

export default connect(mapStateToProps)(BatchDelivTeamListTable);