import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/course.actions';
import LoadingMessage from '../../modules/common/LoadingMessage';
import CourseSettingsEdit from './CourseSettingsEdit';
import { Button } from 'elemental';

class CourseSettingsListTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isEditing: false };
		this.toggleEdit = this.toggleEdit.bind(this);
	}

	componentWillMount() {
		this.props.dispatch(courseActions.getCourseSettings(this.props.params.courses));
	}

	toggleEdit() {
		this.setState({ isEditing: !this.state.isEditing });
	}

	render () {
		if (!this.props.courseSettings) {
			return (
				<LoadingMessage />
			);
		}
		else if (!this.state.isEditing) {
			return (
				<table className="table-expand">
				  <thead>
				    <tr className="table-expand-row">
				      <th width="200">Bootstrap Docker Image Repo</th>
				      <th>Testing Delay On</th>
				      <th width="150">Marking Delay Time</th>
				      <th width="150">Mark Deliverables In Batches</th>
				      <th width="150">Deliverable Settings</th>
				    </tr>
				  </thead>
		        	<tbody>
						<tr className="table-expand-row" data-open-details>
						  	<td>{this.props.courseSettings.bootstrapImage}</td>
						  	<td>{this.props.courseSettings.testingDelay}</td>
						  	<td>{this.props.courseSettings.delayTime}</td>
						  	<td>{this.props.courseSettings.markDelivsByBatch}</td>
						  	<td>{this.props.courseSettings.deliverables}</td>
						</tr>

						<tr className="table-expand-row-content">
						  <td colspan="8" className="table-expand-row-nested">
						    <p>info</p>
						  </td>
						</tr>
					</tbody>
					<Button onClick={this.toggleEdit}>Edit</Button>
				</table>
			);
		}
		else {
			return (
				<CourseSettingsListEdit courseSettings={this.props.courseSettings}/>
			)
		}
	}
}

CourseSettingsListTable.propTypes = {
	courseSettings: PropTypes.object.isRequired,
	editable: PropTypes.bool,
}

function mapStateToProps(state, ownState) {
	return {
		courseSettings: state.courseSettings,
		editable: ownState.editable,
	}
}

export default connect(mapStateToProps)(CourseSettingsListTable);