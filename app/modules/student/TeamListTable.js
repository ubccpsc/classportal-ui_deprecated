import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as teamActions from '../../actions/team.actions';
import * as courseActions from '../../actions/course.actions';
import * as classListActions from '../../actions/classList.actions';
import LoadingMessage from '../../modules/common/LoadingMessage';
import BatchDelivTeamListTable from './BatchDelivTeam/BatchDelivTeamListTable';
import { Button } from 'elemental';
import { Link } from 'elemental';

class TeamListTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			teamList: [],
			username: ''
		}
		this.addTeamMember = this.addTeamMember.bind(this);
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handleTeamSubmission = this.handleTeamSubmission.bind(this);
	}

	componentWillMount() {
		let that = this;
		this.props.dispatch(teamActions.getMyTeamsPerCourse(this.props.params.courses));
		this.props.dispatch(courseActions.getCourseDetails(this.props.params.courses));
	}

	addTeamMember(e) {
		e.preventDefault();
		this.props.dispatch(teamActions.isStudentInSameLab(310, this.state.username));
	}

	handleUsernameChange(e) {
		this.setState({username: e.target.value});
	}

	handleTeamSubmission(e) {
		e.preventDefault();
		alert(this.props.teams);
		this.props.dispatch(teamActions.createCustomTeam(310, this.props.usernames));
	}

	render () {

		if (this.props.course.markDelivsByBatch !== null && this.props.course.markDelivsByBatch == true ) {
			return (
				<div className="team-tables-view row">
					<form className="twelve column">
						<div className="input-group">
						  <span className="input-group-label">Add Team Member</span>
						  <input className="input-group-field"
						  	  onChange={this.handleUsernameChange}
							  name="username" 
							  label="username"
							  type="text"/>
						  <div className="input-group-button">
						    <input type="submit" className="button" onClick={this.addTeamMember}/>
						  </div>
						</div>
						{this.props.teams.map(username => 
						  <div className="callout">
						  	<button className="close-button" aria-label="Close alert" type="button">
						  	    <span aria-hidden="true">&times;</span>
  							</button>
						    <p className="two stat column text-center">{username}
						    	<input type="hidden" name="usernames" label="usernames" value={username}/>
						    </p>
						  </div>
						)}

						{ this.props.teams.length > 0 ? <input type="submit" value="Submit" className="button" onClick={this.handleTeamSubmission}/> : null}
					</form>
				</div>
			)
		}
		else {
			return ( 
					null
				) 
		}
	}
}

TeamListTable.propTypes = {
	teams: PropTypes.array.isRequired,
	studentsWithoutTeam: PropTypes.array.isRequired,
	course: PropTypes.object.isRequired,
	myTeams: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
		])
}

function mapStateToProps(state, ownState) {
	return {
		teams: state.teams,
		studentsWithoutTeam: state.studentsWithoutTeam,
		myTeams: state.myTeams,
		course: state.course,
	}
}

export default connect(mapStateToProps)(TeamListTable);