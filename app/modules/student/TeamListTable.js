import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as teamActions from '../../actions/team.actions';
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

	}

	render () {

		return (
		<div>
			<div className="people-you-might-know">
			  <div className="add-people-header">
			    <h6 className="header-title">
			      Add Team Members
			    </h6>
			  </div>
			  <div className="row add-people-section">
			    <div className="small-12 medium-6 columns about-people">
			      <div className="about-people-author">
			        <p className="author-name">
			          Kishore Kumar
			        </p>
			        <p className="author-location">
			          <i className="fa fa-map-marker" aria-hidden="true"></i>
			          Mumbai, India
			        </p>
			        <p className="author-mutual">
			          <strong>Shahrukh Khan</strong> is a mutual friend.
			        </p>
			      </div>    
			    </div>
			    <div className="small-12 medium-6 columns add-friend">
			      <div className="add-friend-action">
			        <button className="button primary small">
			          <i className="fa fa-user-plus" aria-hidden="true"></i>
			          Add Friend
			        </button>
			        <button className="button secondary small">
			          <i className="fa fa-user-times" aria-hidden="true"></i>
			          Ignore
			        </button>
			      </div>
			    </div>
			  </div>
			  <div className="row add-people-section">
			    <div className="small-12 medium-6 columns about-people">
			      <div className="about-people-author">
			        <p className="author-name">
			          Barack Obama
			        </p>
			        <p className="author-location">
			          <i className="fa fa-map-marker" aria-hidden="true"></i>
			          Hawaii, United States
			        </p>
			        <p className="author-mutual">
			          <strong>Hilary Clinton</strong> is a mutual friend.
			        </p>
			      </div>    
			    </div>
			    <div className="small-12 medium-6 columns add-friend">
			      <div className="add-friend-action">
			        <button className="button primary small">
			          <i className="fa fa-user-plus" aria-hidden="true"></i>
			          Add Friend
			        </button>
			        <button className="button secondary small">
			          <i className="fa fa-user-times" aria-hidden="true"></i>
			          Ignore
			        </button>
			      </div>
			    </div>
			  </div>
			  <div className="row add-people-section">
			    <div className="small-12 medium-6 columns about-people">
			      <div className="about-people-author">
			        <p className="author-name">
			          Harry Manchanda
			        </p>
			        <p className="author-location">
			          <i className="fa fa-map-marker" aria-hidden="true"></i>
			          New Delhi, India
			        </p>
			        <p className="author-mutual">
			          <strong>Rafi Benkual</strong> is a mutual friend.
			        </p>
			      </div>    
			    </div>
			    <div className="small-12 medium-6 columns add-friend">
			      <div className="add-friend-action">
			        <button className="button primary small">
			          <i className="fa fa-user-plus" aria-hidden="true"></i>
			          Add Friend
			        </button>
			        <button className="button secondary small">
			          <i className="fa fa-user-times" aria-hidden="true"></i>
			          Ignore
			        </button>
			      </div>
			    </div>
			  </div>
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

TeamListTable.propTypes = {

}

function mapStateToProps(state, ownState) {
	return {

	}
}

export default connect(mapStateToProps)(TeamListTable);