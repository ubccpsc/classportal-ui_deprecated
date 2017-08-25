import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as deliverableActions from '../../actions/deliverable.actions';
import LoadingMessage from '../../modules/common/LoadingMessage';
import DeliverableRepoOptionsRow from './DeliverableRepoOptionsRow';
import { Button } from 'elemental';
import config from '../../config';


class DeliverableRepoOptionsTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isEditing: false };
		this.toggleCreate = this.toggleCreate.bind(this);
	}

	toggleCreate() {
		this.setState({isEditing: !this.state.isEditing});
	}

	componentWillMount() {
		this.props.dispatch(deliverableActions.getDeliverablesFromCourse(this.props.params.courses));
	}

	displayDeliverableButton () {
		switch(this.props.user.userrole) {
			case 'superadmin':
				return this.editRepoOptionsButton();
			case 'admin':
				return this.editRepoOptionsButton();
			case 'student':
				return (null);
			default:
				return null;
		}
	}

	editRepoOptionsButton() {
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
		else if (this.state.isEditing) {
			return (
				<CreateDeliverableForm courseId={this.props.params.courses}/>
			);
		}
		else {
			const editRepoOptionsButton = this.displayDeliverableButton();
			return (
				<div className="table-expand-container">
					<table className="table-expand">
						<thead>
							<tr className="table-expand-row">
								<th width="200">Deliverable</th>
								<th>Github Source URL</th>
								<th width="150">Repos Created</th>
								<th width="150">In Progress</th>
							</tr>
						</thead>
						{this.props.deliverables.map(deliverable => 
			        {if (deliverable.name === this.props.params.deliverableName) {
								return <DeliverableRepoOptionsRow key={deliverable._id} courseId={this.props.params.courses} deliverable={deliverable}/ >
			         }}
						)} 
					</table>
					{editRepoOptionsButton}
				</div>
			);
		}
	}
}

DeliverableRepoOptionsTable.propTypes = {
	deliverables: PropTypes.array.isRequired,
	user: PropTypes.object.isRequired,
}

function mapStateToProps(state, ownState) {
	return {
		deliverables: state.deliverables,
		user: state.user,
	}
}

export default connect(mapStateToProps)(DeliverableRepoOptionsTable);