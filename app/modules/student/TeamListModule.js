import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as teamActions from '../../actions/team.actions';
import * as courseActions from '../../actions/course.actions';
import * as flashMessageActions from '../../actions/flashMessage.actions';
import * as classListActions from '../../actions/classList.actions';
import LoadingMessage from '../../modules/common/LoadingMessage';
import TeamListTable from './TeamListTable';
import { Button } from 'elemental';
import { Link } from 'elemental';

class TeamListModule extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			teamList: [],
			username: ''
		}
		this.addTeamMember = this.addTeamMember.bind(this);
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handleTeamSubmission = this.handleTeamSubmission.bind(this);
		this.handleRemoveTeamMember = this.handleRemoveTeamMember.bind(this);
		this.clearInputField = this.clearInputField.bind(this);
		this.props.dispatch(teamActions.getMyTeamsPerCourse(this.props.params.courses));
	}

	componentWillMount() {
		let that = this;
		this.props.dispatch(teamActions.getMyTeamsPerCourse(this.props.params.courses));
		this.props.dispatch(courseActions.getCourseDetails(this.props.params.courses));
	}

	addTeamMember(e) {
		e.preventDefault();
		this.props.dispatch(teamActions.isStudentInSameLab(310, this.state.username))
			.then(action => {
				let inSameLab = action.value.response.inSameLab;
				if (inSameLab === false) {
					this.props.dispatch(flashMessageActions.addFlashMessage({ type: 'failed', headline: 'Cannot Add Team Member', 
						body: 'Team members must be registered in same lab section and cannot already be on a team.'}))
				} else {
					this.clearInputField();
				}
			});
	}

	handleUsernameChange(e) {
		this.setState({username: e.target.value});
	}

	handleRemoveTeamMember(event) {
		this.props.dispatch(teamActions.removeStudentFromTentativeTeam(event.currentTarget.getAttribute('data-username')));
	}

	handleTeamSubmission(e) {
		e.preventDefault();
		this.props.dispatch(teamActions.createCustomTeam(310, this.props.teams))
			.then(response => {
				response = String(response.value);
				if (response.indexOf('ERROR API') > -1) {
					this.props.dispatch(flashMessageActions.addFlashMessage({ type: 'failed', headline: 'Team Creation Failed', 
						body: 'Your team could not be created. Team members cannot be added to multiple teams.'}))
				} else {
					this.props.dispatch(flashMessageActions.addFlashMessage({ type: 'success', headline: 'Successfully Created Team',
						body: 'Your team has successfully been created.'}))
					this.props.dispatch(teamActions.getMyTeamsPerCourse(this.props.params.courses));
				}
			});
	}

	clearInputField() {
		ReactDOM.findDOMNode(this.refs.inputField).value = '';
	}

	render () {

		// IF returns view of markByBatch team creation, as the student is not on any teams yet. 
		if (this.props.course.markDelivsByBatch == true && typeof this.props.myTeams[0] === 'string') {

			this.props.dispatch(flashMessageActions.addFlashMessage({ type: 'warning', headline: 'You Are Not On Any Teams',
				body: 'To create a team, add GitHub users who are registered in your lab.'}))

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
							{this.props.teams.map(username => 
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

							{this.props.teams.length > 0 ? <input type="submit" value="Save Team" className="button" onClick={this.handleTeamSubmission}/> : null}
						</form>
					</div>
				</div>
			)
		} else if (this.props.course.markDelivsByBatch == true && this.props.myTeams.length > 0) {
			// ELSE IF Display the teams that the student is on.
			return ( 
				<TeamListTable/>
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
	teams: PropTypes.array.isRequired,
	studentsWithoutTeam: PropTypes.array.isRequired,
	course: PropTypes.object.isRequired,
	myTeams: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
		]),
	teamCreationStatus: PropTypes.string,
	addFlashMessage: PropTypes.func.isRequired,
}

function mapStateToProps(state, ownState) {
	return {
		teams: state.teams,
		studentsWithoutTeam: state.studentsWithoutTeam,
		myTeams: state.myTeams,
		course: state.course,
		teamCreationStatus: state.teamCreationStatus,
	}
}

export default connect(mapStateToProps)(TeamListModule);