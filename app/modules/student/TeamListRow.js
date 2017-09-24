import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Column } from 'react-foundation';
import config from '../../config';

class TeamListRow extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

			if (this.props.team) {
				let teamMemberRows = this.props.team.members.map(teamMember => {
					return (
						<div key={teamMember.username} className="row add-people-section">
						    <div className="small-12 medium-6 columns about-people">
						      <div className="about-people-author">
						        <p className="author-name">
						          {teamMember.username}
						        </p>
						        {/*<p className="author-location">
						          <i className="fa fa-map-marker" aria-hidden="true"></i>
						          Mumbai, India
						        </p>
						        <p className="author-mutual">
						          <strong>Shahrukh Khan</strong> is a mutual friend.
						        </p>*/}
						      </div>    
						    </div>
						    <div className="small-12 medium-6 columns add-friend">
						      <div className="add-friend-action">
						      	<a href={config.githubEnterprise + '/' + teamMember.username}>
							        <button className="button primary small">
							          <i className="fa fa-user-plus" aria-hidden="true"></i>
							          View Github Profile
							        </button>
						        </a>
						        {/* <button className="button secondary small">
						          <i className="fa fa-user-times" aria-hidden="true"></i>
						          Remove
						        </button>*/}
						      </div>
						    </div>
						</div>
					);
				});

				return (
					<div className="columns small-12 large-centered">{teamMemberRows}</div>
					)			
			} else {
				return (
					null
					);
			}

	}
}

TeamListRow.propTypes = {
	team: React.PropTypes.object.isRequired
}


export default TeamListRow;