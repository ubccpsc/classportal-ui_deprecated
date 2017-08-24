import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as deliverableActions from '../../actions/deliverable.actions';
import LoadingMessage from '../../modules/common/LoadingMessage';
import DeliverableListRow from './DeliverableListRow';
import { Button } from 'elemental';
import config from '../../config';


class DeliverableListTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isCreating: false };
		this.toggleCreate = this.toggleCreate.bind(this);
	}

	toggleCreate() {
		this.setState({isCreating: !this.state.isCreating});
	}

	componentWillMount() {
		this.props.dispatch(deliverableActions.getDeliverablesFromCourse(this.props.params.courses));
	}

	displayDeliverableButton () {
		switch(this.props.user.userrole) {
			case 'superadmin':
				return this.createDeliverableButton();
			case 'admin':
				return this.createDeliverableButton();
			case 'student':
				return (null);
			default:
				return null;
		}
	}

	createDeliverableButton() {
		let linkPath = `${config.appPath}/${this.props.user.userrole}/${this.props.params.courses}/`;
			return (
				<Link onClick={this.toggleCreate}><Button>Create Deliverable</Button></Link>
			);
	}

	render () {
		if (this.props.deliverables.length < 1) {
			return (
				<LoadingMessage />
			);
		}
		else if (this.state.isCreating) {
			return (
				<div>Creating a wonderful thing.</div>
			);
		}
		else {
			const createDeliverableButton = this.displayDeliverableButton();
			return (
				<div className="table-expand-container">
					<table className="table-expand">
						<thead>
							<tr className="table-expand-row">
								<th width="200">Deliverable</th>
								<th>Github Source URL</th>
								<th width="150">Open</th>
								<th width="150">Close</th>
								<th>Grades Released</th>
							</tr>
						</thead>
								{this.props.deliverables.map(deliverable => 
									<DeliverableListRow key={deliverable._id} courseId={this.props.params.courses} deliverable={deliverable}/ >
								)}
					</table>
					{createDeliverableButton}
				</div>
			);
		}
	}
}

DeliverableListTable.propTypes = {
	deliverables: PropTypes.array.isRequired,
	user: PropTypes.object.isRequired,
}

function mapStateToProps(state, ownState) {
	return {
		deliverables: state.deliverables,
		user: state.user,
	}
}

export default connect(mapStateToProps)(DeliverableListTable);