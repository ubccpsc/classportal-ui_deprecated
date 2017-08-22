import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as deliverableActions from '../../actions/deliverable.actions';
import LoadingMessage from '../../modules/common/LoadingMessage';
import DeliverableListRow from './DeliverableListRow';


class DeliverableListTable extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.dispatch(deliverableActions.getDeliverablesFromCourse(this.props.params.courses));
	}

	render () {
		if (this.props.deliverables.length < 1) {
			return (
				<LoadingMessage />
			);
		}
		else {
			return (
				<table className="table-expand">
				  <thead>
				    <tr className="table-expand-row">
				      <th width="200">Deliverable</th>
				      <th>Github Source URL</th>
				      <th width="150">Open</th>
				      <th width="150">Close</th>
				      <th>Settings</th>
				    </tr>
				  </thead>
		        	{this.props.deliverables.map(deliverable => 
		        		<DeliverableListRow courseId={this.props.params.courses} deliverable={deliverable}/ >
		        	)}
				</table>
			);
		}
	}
}

DeliverableListTable.propTypes = {
	deliverables: PropTypes.array.isRequired,
}

function mapStateToProps(state, ownState) {
	return {
		deliverables: state.deliverables
	}
}

export default connect(mapStateToProps)(DeliverableListTable);