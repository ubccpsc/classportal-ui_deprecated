import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Column } from 'react-foundation';
import config from '../../config';
import TeamListRow from './TeamListRow';

const STUDENT_ROLE = 'student';

class TeamListTable extends React.Component {

	constructor(props) {
		super(props);
		this.createBatchDelivTeamTitle = this.createBatchDelivTeamTitle.bind(this);
		this.createSingleDelivTeamTitle = this.createSingleDelivTeamTitle.bind(this);
		this.renderTable = this.renderTable.bind(this);
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

	renderTable(teams) {
		return teams.map(team => {

				let teamTitle = '';
				let githubRepoLink = null;

				// IF multi-deliverable team project
				if (typeof team.deliverableIds !== 'undefined' && typeof team.deliverableId === 'undefined') {
					teamTitle = this.createBatchDelivTeamTitle(team);
					
				} else {
					// ELSE single-deliverable team project
					teamTitle = this.createSingleDelivTeamTitle(team);
				}

			  	if (team.githubState.repo.url !== '') {
			  		githubRepoLink = (							  
			  			<div className="view-more-people">
			    			<p className="view-more-text">
			      				<a href={config.githubEnterprise + '/' + 'test'} className="view-more-link">Github Repo</a>
			    			</p>
			  			</div>
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
						  	{githubRepoLink}
						</div>
					);
			});
	}

	render() {
		let userrole = String(this.props.user.userrole);

		if (this.props.myTeams.length > 0 && userrole === STUDENT_ROLE) {

			const teamListRows = this.renderTable(this.props.myTeams);

			return (
				<div className="team">{teamListRows}</div>
				)

		} else if (this.props.teams.length > 0 && userrole !== STUDENT_ROLE) {
			const teamListRows = this.renderTable(this.props.teams);
			
			return (
				<div>
					<div className="team">{teamListRows}</div>
					<div>admin delete team option</div>
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
	myTeams: React.PropTypes.array.isRequired,
	teams: React.PropTypes.array.isRequired,
	user: React.PropTypes.object.isRequired,
}

function mapStateToProps(state, ownState) {
	return {
		myTeams: state.myTeams,
		teams: state.teams,
		user: state.user
	}
}

export default connect(mapStateToProps)(TeamListTable);