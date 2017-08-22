import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as teamActions from '../../actions/team.actions';
import * as userActions from '../../actions/user.actions';
import LoadingMessage from '../../modules/common/LoadingMessage';
import TeamListRow from './TeamListRow';
import { Button } from 'elemental';
import { Link } from 'elemental';

class TeamListTable extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		let that = this;
		this.props.dispatch(userActions.getCurrentUser())
			.then(() => {
				this.props.dispatch(teamActions.getCourseTeamsPerUser(this.props.params.courses, this.props.user._id));
			})
	}

	render () {
		if (this.props.teams.length < 1) {
			return (
				<LoadingMessage />
			);
		}
		else {
			return (
  			<div>
					<table className="table-expand">
					  <thead>
					    <tr className="table-expand-row">
					      <th width="200">First Name</th>
					      <th>Last Name</th>
					      <th width="150">CSID</th>
					      <th width="150">SNUM</th>
					      <th>Username</th>
                <th>Userrole</th>
					    </tr>
					  </thead>
			        {this.props.teams.map(team => 
			        	<TeamListRow key={team._id} team={team} courseId={this.props.params.courses}/>
			        )}
					</table>
				</div>
			)
		}
	}
}

TeamListTable.propTypes = {
	user: PropTypes.object.isRequired,
	teams: PropTypes.array.isRequired,
}

function mapStateToProps(state, ownState) {
	return {
		user: state.user,
		teams: state.teams,
	}
}

export default connect(mapStateToProps)(TeamListTable);