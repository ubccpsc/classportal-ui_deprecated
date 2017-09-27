import React, { PropTypes } from 'react';
import config from '../../config';
import { connect } from 'react-redux';
import * as githubActions from '../../actions/github.actions';
import { Link } from 'react-router';
import { Button } from 'elemental';

class DeliverableRepoOptionsRow extends React.Component {

	constructor(props) {
		super(props);
		this.toggleEdit = false;
		this.appRootPath = config.appAddress;
		this.isCreating = props.isCreating;
		this.createReposForTeams = this.createReposForTeams.bind(this);
	}

	componentWillMount() {
	}

	createReposForTeams() {
		this.props.dispatch(githubActions.createReposForTeams(this.props.courseId, this.props.deliverable.name));
	}

	render() {
		this.createRepos = this.createReposForTeams;

		return (
			<tbody>
				<tr className="table-expand-row" data-open-details>
				  	<td>{this.props.deliverable.name}</td>
				  	<td>{this.props.deliverable.url}</td>
				  	<td>{this.props.deliverable.reposCreated ? 'True' : 'False'}</td>
				  	<td>{this.props.deliverable.buildingRepos ? 'True' : 'False'}</td>
				  	<td><Link onClick={this.createRepos} activeClassName="is-active"><Button>Build Repos</Button></Link></td>
				  	<td><Link onClick={console.log(null)} activeClassName="is-active"><Button>Edit</Button></Link></td>
				</tr>

				<tr className="table-expand-row-content">
				  <td colSpan="8" className="table-expand-row-nested">
				  </td>
				</tr>
			</tbody>
		);
	}
}



DeliverableRepoOptionsRow.propTypes = {
	deliverables: PropTypes.array.isRequired,
	user: PropTypes.object.isRequired,
}

function mapStateToProps(state, ownState) {
	return {
		deliverables: state.deliverables,
		user: state.user,
	}
}

export default connect(mapStateToProps)(DeliverableRepoOptionsRow);