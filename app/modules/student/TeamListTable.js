import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Column } from 'react-foundation';
import config from '../../config';
import * as teamActions from '../../actions/team.actions';
import TeamListRow from './TeamListRow';
import { browserHistory } from 'react-router';

const STUDENT_ROLE = 'student';
const TEAM_DISBANDED_SUCCESS = 'Team disbanded.';

class TeamListTable extends React.Component {

	constructor(props) {
		super(props);
		this.createBatchDelivTeamTitle = this.createBatchDelivTeamTitle.bind(this);
		this.createSingleDelivTeamTitle = this.createSingleDelivTeamTitle.bind(this);
		this.renderTable = this.renderTable.bind(this);
		this.handleDisbandTeamClick = this.handleDisbandTeamClick.bind(this);
	}

	createBatchDelivTeamTitle(team) {

		const name = String(team.name);
		let title = 'Deliverables: ';

		// Add in Deliverables, ie. d1, d2, d3
		for (let i = 0; i < team.deliverableIds.length; i++) {
			title = team.deliverableIds.length === (i + 1) ? title + team.deliverableIds[i].name : title + team.deliverableIds[i].name + ', ';
		}

		// Add in Team Name with Team Model Number and pretty print it
		let teamName = name.charAt(0).toUpperCase() + name.slice(1).replace(/[0-9]/g, '') + ' ' + name.replace(/^\D+/g, '');
		title = teamName + ' | ' + title;

		return title;
	}

	createSingleDelivTeamTitle(team) {
		let title = 'Deliverable: ';
		let teamName = name.charAt(0).toUpperCase() + name.slice(1).replace(/[0-9]/g, '') + ' ' + name.replace(/^\D+/g, '');
		title = teamName + ' | ' + title;

		return title;
	}

	handleDisbandTeamClick(e) {
		e.preventDefault();
		let teamId = e.currentTarget.getAttribute('data-team-id');
		this.props.dispatch(teamActions.disbandTeamById(teamId))
			.then((action) => {
				let isSuccessful = String(action.value.response) === TEAM_DISBANDED_SUCCESS ? true : false;
				if (isSuccessful) {
					this.props.dispatch(teamActions.getMyTeamsPerCourse(this.props.courseNum));
				}
				if (isSuccessful && String(this.props.user.userrole) !== STUDENT_ROLE) {
					console.log('handleDisbandTeamClick');
					this.props.dispatch(teamActions.getMyTeamsPerCourse(this.props.courseNum));
					this.props.dispatch(teamActions.getCourseTeamsWithBatchMarking(this.props.courseNum));
				}
			});
	}

	renderTable(team) {
		return team.map(team => {
				let teamTitle = '';
				let githubRepoButton = null;
				let disbandTeamButton = null;

				// IF multi-deliverable team project
				if (typeof team.deliverableIds !== 'undefined' && typeof team.deliverableId === 'undefined') {
					teamTitle = this.createBatchDelivTeamTitle(team);
				} else {
					// ELSE single-deliverable team project
					teamTitle = this.createSingleDelivTeamTitle(team);
				}

			  	if (team.githubState.repo.url !== '') {
			  		githubRepoButton = (							  
	  					<a href={team.githubState.repo.url} className="view-more-link">
		  					<button className="button secondary small">
					          <i className="fa fa-user-plus" aria-hidden="true"></i>
					          View Github Repo
					        </button>
				        </a>
			  		);
			  	}

			  	if (String(this.props.user.userrole) !== STUDENT_ROLE) {
					disbandTeamButton = (
						<button className="button alert small" data-team-id={team._id} onClick={this.handleDisbandTeamClick}>
				          <i className="fa fa-user-plus" aria-hidden="true"></i>
				          Disband Team
				        </button>
			        );
			  	}

				return (
						<div key={team._id} className="people-you-might-know columns twelve">
						  <div className="row add-people-header">
						    <h6 className="header-title">
						      {teamTitle}
						    </h6>
						  </div>
						  <TeamListRow team={team}/>
						  	<div className="large centered team-action-links">
						  		{githubRepoButton}
						        {disbandTeamButton}
						  	</div>
						</div>
					);
			});
	}

	render() {
		let userrole = String(this.props.user.userrole);

		if (this.props.team.length > 0) {

			const teamListRows = this.renderTable(this.props.team);

			return (
				<div className="team">{teamListRows}</div>
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
	team: React.PropTypes.array.isRequired,
	user: React.PropTypes.object.isRequired,
}

function mapStateToProps(state, ownState) {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(TeamListTable);