import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as teamActions from '../../actions/team.actions';
import * as courseActions from '../../actions/course.actions';
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
					  <div className="row add-people-section">
					    <div className="small-12 medium-6 columns about-people">
					      <div className="about-people-author">
					        <p className="author-name">
					          { student.lname }
					        </p>
					        <p className="author-location">
					          <i className="fa fa-map-marker" aria-hidden="true"></i>
					          { student.fname }
					        </p>
					        <p className="author-mutual">
					          You are in the same lab
					        </p>
					      </div>    
					    </div>
					    <div className="small-12 medium-6 columns add-friend">
					      <div className="add-friend-action">
					        <button className="button primary small">
					          <i className="fa fa-user-plus" aria-hidden="true"></i>
					          Add Team Member
					        </button>
					        <button className="button secondary small">
					          <i className="fa fa-user-times" aria-hidden="true"></i>
					          Ignore
					        </button>
					      </div>
					    </div>
					  </div>
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

TeamListTable.propTypes = {
	studentsWithoutTeam: PropTypes.array.isRequired,
	course: PropTypes.object.isRequired,
}
function mapStateToProps(state, ownState) {
	return {
		studentsWithoutTeam: state.studentsWithoutTeam,
		course: state.course,
	}
}

export default connect(mapStateToProps)(TeamListTable);