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
					<div data-closable="fade-out" class="todo-list-card card">
					  <div class="card-divider">
					    <h3>To Do List</h3>
					    <button class="close-button" data-close>x</button>
					  </div>
					  <div class="card-section">
					    <ul>
					      <li><input id="item1" type="checkbox"></input><label for="item1"></label>Item 1</li>
					      <li><input id="item2" type="checkbox"></input><label for="item2"></label>Item 2</li>
					      <li><input id="item3" type="checkbox"></input><label for="item3"></label>Item 3</li>
					      <li><input id="item4" type="checkbox"></input><label for="item4"></label>Item 4</li>
					      <li><input id="item5" type="checkbox"></input><label for="item5"></label>Item 5</li>
					      <li><input id="item6" type="checkbox"></input><label for="item6"></label>Item 6</li>
					    </ul>
					  </div>
					</div>
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