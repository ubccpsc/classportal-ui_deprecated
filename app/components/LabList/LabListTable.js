import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/course.actions';
import * as labListActions from '../../actions/labList.actions';
import LoadingMessage from '../../modules/common/LoadingMessage';
import LabListRow from './LabListRow';
import LabListUpload from './LabListUpload';


class LabListTable extends React.Component {
	constructor(props) {
		super(props);
		this.props.dispatch(labListActions.clearLabList());
	}

	componentWillMount() {
		// this.props.dispatch(labListActions.getLabSectionsFromCourse());
	}

	render () {
		return (
			<div>
				<table className="table-expand">
					<thead>
						<tr className="table-expand-row">
							<th width="200">Course Number</th>
							<th>Name</th>
							<th width="150">Students Set Teams</th>
							<th>Min Team Size</th>
							<th width="150">Max Team Size</th>
							<th/>
							<th/>
						</tr>
					</thead>
						{/* {this.props.courses.map(course => 
							<LabListRow key={course.courseId} course={course}/>
						)} */}
				</table>
				<LabListUpload courseNum={this.props.params.courses} />
			</div>
		);
	}
}

LabListTable.propTypes = {
	labs: PropTypes.array.isRequired,
}

function mapStateToProps(state, ownState) {
	return {
		labSections: state.labSections
	}
}


export default connect(mapStateToProps)(LabListTable);