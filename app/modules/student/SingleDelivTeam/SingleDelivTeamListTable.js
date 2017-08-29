import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as teamActions from '../../actions/team.actions';
import * as courseActions from '../../actions/course.actions';
import LoadingMessage from '../../modules/common/LoadingMessage';
import TeamListRow from './TeamListRow';
import SingleDelivTeamListRow from './SingleDelivTeamListRow';
import { Button } from 'elemental';
import { Link } from 'elemental';

class SingleDelivTeamListTable extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		let that = this;
		this.props.dispatch(teamActions.getStudentsWithoutTeam(this.props.params.courses));
		this.props.dispatch(courseActions.getCourseDetails(this.props.params.courses));
	}

	render () {

		if (this.props.studentsWithoutTeam !== null) {
			return (

			<div className="row">
				<div className="people-you-might-know medium-12">
				  <div className="add-people-header">
				    <h6 className="header-title">
				      Add Team Members
				    </h6>
				  </div>
				  { this.props.studentsWithoutTeam.map(student =>
				  	<BatchDelivTeamListRow key={student._id} student={student}/>
				  )}
				  <div className="view-more-people">
				    <p className="view-more-text">
				      <a href="#" className="view-more-link">View More..</a>
				    </p>
				  </div>
				</div>
			</div>
			)
		}
	}
}

SingleDelivTeamListTable.propTypes = {
	studentsWithoutTeam: PropTypes.array.isRequired,
	course: PropTypes.object.isRequired,
}

function mapStateToProps(state, ownState) {
	return {
		studentsWithoutTeam: state.studentsWithoutTeam,
		course: state.course,
	}
}

export default connect(mapStateToProps)(SingleDelivTeamListTable);