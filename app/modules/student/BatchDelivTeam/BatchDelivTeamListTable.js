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
		this.submitUpdateHandler = this.submitUpdateHandler.bind(this);
		this.removeUserFromTeam = this.removeUserFromTeam.bind(this);
		this.addUserToTeam = this.addUserToTeam.bind(this);
		this.state = {
			updatedTeam: props.myTeams.members || new Array(),
			studentsWithoutTeam: props.studentsWithoutTeam,
		}
	}

	componentWillMount() {
	}

	submitUpdateHandler = (e, data) => {
		e.preventDefault();
	 // this.props.dispatch(teamAction.updateTeam())
	}

	getUpdatedTeamObj() {
		return {

		}
	}

	addUserToTeam = (e, data) => {
		e.preventDefault();
				let updatedTeam = this.state.updatedTeam;
		let studentsWithoutTeam = this.state.studentsWithoutTeam;

		console.log('state before', updatedTeam);
		console.log('studentsWithoutTeam before', studentsWithoutTeam);
		let dataIDTag = e.target.attributes.getNamedItem('data-id').value;
		let indexNum;
		for (let i = 0; i < studentsWithoutTeam.length; i++) {
			if (studentsWithoutTeam[i]._id.indexOf(dataIDTag) == 0) {
				indexNum = i;
			}
		}

		updatedTeam.push(studentsWithoutTeam[indexNum]);
		studentsWithoutTeam.splice(indexNum, 1);

		this.setState({ updatedTeam: updatedTeam,
										studentsWithoutTeam: studentsWithoutTeam,
									});
		console.log('state after', this.state.updatedTeam);
		console.log('students without after', this.state.studentsWithoutTeam);
		console.log(indexNum);
	}

	removeUserFromTeam = (e, data) => {
		e.preventDefault();
		let updatedTeam = this.state.updatedTeam;
		let studentsWithoutTeam = this.state.studentsWithoutTeam;

		console.log('state before', updatedTeam);
		console.log('studentsWithoutTeam before', studentsWithoutTeam);
		let dataIDTag = e.target.attributes.getNamedItem('data-id').value;
		console.log('data id tag', dataIDTag);
		let indexNum;
		for (let i = 0; i < updatedTeam.length; i++) {
			if (updatedTeam[i]._id.indexOf(dataIDTag) == 0) {
				indexNum = i;
			}
		}

		studentsWithoutTeam.push(updatedTeam[indexNum]);
		updatedTeam.splice(indexNum, 1);

		this.setState({ updatedTeam: updatedTeam,
										studentsWithoutTeam: studentsWithoutTeam,
									});
		console.log('state after', this.state.updatedTeam);
		console.log('students without after', this.state.studentsWithoutTeam);
		console.log(indexNum);
	}

	render () {
		console.log('array', this.state.studentsWithoutTeam.length)
		console.log('object', this.state.updatedTeam.length )
		if (this.state.studentsWithoutTeam && this.state.updatedTeam.length > 0 ) {
			return (
			<div className="batch-team-list-table">
				<div className="row">
					<div className="available-team-members medium-12">
						<div className="add-people-header">
							<h6 className="header-title">
								Current Team
							</h6>
						</div>
							<form>
							  { this.state.updatedTeam.map(teamMember =>
							  	<BatchCurrentTeamListRow key={teamMember._id} removeUserFromTeam={this.removeUserFromTeam} 
							  	teamMember={teamMember}/>
							  )}
							<div className="update-team-button-container">
								<Button onClick={this.submitUpdateTeamRequest}>Save Team</Button>
							</div>
					  	</form>
					</div>
				</div>
				<div className="row">
					<div className="available-team-members medium-12">
					  <div className="add-people-header">
					    <h6 className="header-title">
					      Available Team Members
					    </h6>
					  </div>
					  { this.state.studentsWithoutTeam.map(student =>
					  	<BatchDelivTeamListRow key={student._id} addUserToTeam={this.addUserToTeam} student={student}/>
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
		else if (this.state.studentsWithoutTeam.length > 0 && this.state.updatedTeam.length == 0 ) {
			return (
			<div className="batch-team-list-table">
				<div className="row">
					<div className="available-team-members medium-12">
						<div className="add-people-header">
							<h6 className="header-title">
								Create New Team
							</h6>
						</div>
							<form>
							  { this.state.updatedTeam.map(teamMember =>
							  	<BatchCurrentTeamListRow key={teamMember._id} removeUserFromTeam={this.removeUserFromTeam} 
							  	teamMember={teamMember}/>
							  )}
							<div className="update-team-button-container">
								<Button onClick={this.submitUpdateTeamRequest}>Save Team</Button>
							</div>
					  	</form>
					</div>
				</div>
				<div className="row">
					<div className="available-team-members medium-12">
					  <div className="add-people-header">
					    <h6 className="header-title">
					      Available Team Members
					    </h6>
					  </div>
					  { this.state.studentsWithoutTeam.map(student =>
					  	<BatchDelivTeamListRow key={student._id} addUserToTeam={this.addUserToTeam} student={student}/>
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
	updatedTeam: PropTypes.array.isRequired,
	course: PropTypes.object.isRequired,
	myTeams: PropTypes.object.isRequired,
}

function mapStateToProps(state, ownState) {
	return {
		studentsWithoutTeam: state.studentsWithoutTeam,
		course: state.course,
		updatedTeam: PropTypes.array.isRequired,
		myTeams: state.myTeams,
	}
}

export default connect(mapStateToProps)(BatchDelivTeamListTable);