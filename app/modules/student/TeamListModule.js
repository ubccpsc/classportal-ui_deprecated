import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as teamActions from '../../actions/team.actions';
import * as courseActions from '../../actions/course.actions';
import * as flashMessageActions from '../../actions/flashMessage.actions';
import * as userActions from '../../actions/user.actions';
import * as classListActions from '../../actions/classList.actions';
import LoadingMessage from '../../modules/common/LoadingMessage';
import TeamListTable from './TeamListTable';
import { Button } from 'elemental';
import { Link } from 'elemental';

let course = 'empty';
const STUDENT_ROLE = 'student';

class TeamListModule extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			teamList: [],
		}
		this.addTeamMember = this.addTeamMember.bind(this);
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handleTeamSubmission = this.handleTeamSubmission.bind(this);
		this.handleRemoveTeamMember = this.handleRemoveTeamMember.bind(this);
		this.clearInputField = this.clearInputField.bind(this);
		this.addLoggedInUserToTeam = this.addLoggedInUserToTeam.bind(this);
		this.props.dispatch(teamActions.getMyTeamsPerCourse(this.props.params.courses));
		this.props.dispatch(courseActions.getCourseDetails(this.props.params.courses))
			.then((_course) => {
				course = _course.action.payload.response;
			});
	}

	componentWillMount() {
		let that = this;
		this.props.dispatch(teamActions.getMyTeamsPerCourse(this.props.params.courses));
		this.props.dispatch(courseActions.getCourseSettings(this.props.params.courses));
		this.props.dispatch(userActions.getCurrentUser())
			.then((action) => {
					let userrole = String(action.value.user.userrole);
					if (userrole !== STUDENT_ROLE) {
					this.props.dispatch(teamActions.getCourseTeamsWithBatchMarking(this.props.params.courses));
				}
			});
	}

	addTeamMember(e) {
		e.preventDefault();
		this.props.dispatch(teamActions.isStudentInSameLab(310, this.state.username))
			.then(data => {

				let response = data.action.payload.response;

		        if (response.inSameLab && this.state.teamList.indexOf(response.username) < 0) {
		        	let newTeamList = this.state.teamList.slice();
		        	newTeamList.push(response.username);

		 		    this.setState({teamList: newTeamList});

		        	if (this.state.teamList.indexOf(this.props.user.username) === -1) {
		        		newTeamList.push(this.props.user.username);
		        	}
		        	
		        	this.setState({teamList: newTeamList});
		        } 

				if (response.inSameLab === false) {
					this.props.dispatch(flashMessageActions.addFlashMessage({ type: 'failed', headline: 'Cannot Add Team Member', 
						body: 'Team members must be registered in same lab section and cannot already be on a team.'}))
				} else {
					this.clearInputField();
				}
			});
	}

	addLoggedInUserToTeam() {
		let userrole = String(this.props.user.userrole);
		if (userrole === STUDENT_ROLE) {
			this.props.dispatch(teamActions.isStudentInSameLab(310, this.props.user.username));
		}
	}

	handleUsernameChange(e) {
		this.setState({username: e.target.value});
	}

	handleRemoveTeamMember(e) {
		let newTeamList = this.state.teamList.slice();
		let index = newTeamList.indexOf(e.currentTarget.getAttribute('data-username'));
		newTeamList.splice(index, 1);
		this.setState({
			teamList: newTeamList
		});
	}

	handleTeamSubmission(e) {
		e.preventDefault();
		let userrole = String(this.props.user.userrole);
		if (this.state.teamList.length > course.maxTeamSize && userrole === STUDENT_ROLE) {
			this.props.dispatch(flashMessageActions.addFlashMessage({ type: 'failed', headline: 'Cannot Create Team', 
				body: `A team has a maximum size of ${course.maxTeamSize} for this course.`}))
		} else if (this.state.teamList.length < course.minTeamSize && userrole === STUDENT_ROLE) {
			this.props.dispatch(flashMessageActions.addFlashMessage({ type: 'failed', headline: 'Cannot Create Team', 
				body: `A team must have a minimum size of ${course.minTeamSize} for this course.`}))
		} else {
			this.props.dispatch(teamActions.createCustomTeam(310, this.state.teamList))
				.then(response => {
					response = String(response.value);
					if (response.indexOf('ERROR API') > -1) {
						this.props.dispatch(flashMessageActions.addFlashMessage({ type: 'failed', headline: 'Team Creation Failed', 
							body: 'Your team could not be created. Team members cannot be added to multiple teams.'}))
					} else if (response.indexOf('ERROR API') < 0 && STUDENT_ROLE === userrole) {
						this.props.dispatch(flashMessageActions.addFlashMessage({ type: 'success', headline: 'Successfully Created Team',
							body: 'Your team has successfully been created.'}))
						this.props.dispatch(teamActions.getMyTeamsPerCourse(this.props.params.courses));
					} else if (response.indexOf('ERROR API') < 0 && STUDENT_ROLE !== userrole){
						this.props.dispatch(flashMessageActions.addFlashMessage({ type: 'success', headline: 'Successfully Created Team',
							body: 'You have successfully added the student team.'}))
						this.props.dispatch(teamActions.getCourseTeamsWithBatchMarking(this.props.params.courses));
					}
				});
		}
	}

	clearInputField() {
		ReactDOM.findDOMNode(this.refs.inputField).value = '';
	}

	render () {

		// IF returns view of markByBatch team creation, as the student is not on any teams yet. 
		if (this.props.course.markDelivsByBatch == true && typeof this.props.myTeams[0] === 'string') {

			this.props.dispatch(flashMessageActions.addFlashMessage({ type: 'warning', headline: 'You Are Not On Any Teams',
				body: 'To create a team, add GitHub users who are registered in your lab. Only TAs may disband teams.'}))
			return (
				<div>
					<div className="team-tables-view row">
						<form className="twelve column">
							<div className="input-group">
							  <span className="input-group-label">GitHub Username</span>
							  <input className="input-group-field"
							  	  onChange={this.handleUsernameChange}
								  name="username" 
								  ref="inputField"
								  placeholder="ie. 'josie101'"
								  label="username"
								  type="text"/>
							  <div className="input-group-button">
							    <input type="submit" value="Add" className="button" onClick={this.addTeamMember}/>
							  </div>
							</div>
							{this.state.teamList.map(username => 
							  <div className="callout" key={username}>
							  	<button className="close-button" 
							  		aria-label="Close alert" 
							  		type="button" 
							  		data-username={username}
							  		onClick={this.handleRemoveTeamMember}>
							  	    <span aria-hidden="true">&times;</span>
	  							</button>
							    <p className="two stat column text-center">{username}
							    	<input type="hidden" name="usernames" label="usernames" value={username}/>
							    </p>
							  </div>
							)}

							{this.state.teamList.length > 0 ? <input type="submit" value="Save Team" className="button" onClick={this.handleTeamSubmission}/> : null}
						</form>
					</div>
				</div>
			)
		} else if (this.props.course.markDelivsByBatch == true && this.props.myTeams.length > 0 && String(this.props.user.userrole) === STUDENT_ROLE) {
			// ELSE IF Display the teams that the student is on.
			return (
				<TeamListTable courseNum={this.props.params.courses} team={this.props.myTeams} />
				)
		} else if (this.props.course.markDelivsByBatch == true && this.props.teams.length > 0 && String(this.props.user.userrole) !== STUDENT_ROLE) {
			// ELSE IF Display the teams that are created for the Admin/TAs
			return (
				<TeamListTable courseNum={this.props.params.courses} team={this.props.teams} />
				)
		}
		else {
			return ( 
					null
				)
		}
	}
}

TeamListModule.propTypes = {
	user: PropTypes.object.isRequired,
	teams: PropTypes.array.isRequired,
	studentsWithoutTeam: PropTypes.array.isRequired,
	myTeams: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		]),
	teamCreationStatus: PropTypes.string,
	addFlashMessage: PropTypes.func,
}

function mapStateToProps(state, ownState) {
	return {
		user: state.user,
		teams: state.teams,
		studentsWithoutTeam: state.studentsWithoutTeam,
		myTeams: state.myTeams,
		course: state.course,
		teamCreationStatus: state.teamCreationStatus,
	}
}

export default connect(mapStateToProps)(TeamListModule);